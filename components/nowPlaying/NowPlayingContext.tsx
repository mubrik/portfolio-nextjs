import React, { ReactNode, useEffect } from "react";

// utils
import createTypeContextUtil from "../utils/createTypeContextUtil";
// types 
import { ILastFmDataState, IPlaylist, ITrackDetail } from "../../custom-types";

// create context
const [usePlaylist, PlaylistProvider] = createTypeContextUtil<IPlaylist>("playlistContext");

interface IComponentProps {
  children?: ReactNode;
}

const NowPlayingContext = ({ children }: IComponentProps): JSX.Element => {

  const [dataState, setDataState] = React.useState<ILastFmDataState>("idle");
  const [nowPlaying, setNowPlaying] = React.useState<ITrackDetail|null>(null);
  const [recentPlays, setRecentPlays] = React.useState<ITrackDetail[]|null>(null);

  // use callback
  const fetchMyTracks = React.useCallback( async () => {
    // loading
    setDataState("loading");
    try {
      const response = await fetch("/api/playlist");
      const tracks: ITrackDetail[] = await response.json();
  
      const [_nowPlaying, ..._recentPlays] = tracks;

      // set states
      setNowPlaying(_nowPlaying);
      setRecentPlays(_recentPlays);
      setDataState("loaded");
    } catch (error) {
      // install notisstack for notifications later/ crreat custom comp
      console.log(error);
      setNowPlaying(null);
      setRecentPlays(null);
      setDataState("error");
    }

  }, []);

  // effect for loading data
  useEffect(() => {
    if (dataState === "idle") {
      fetchMyTracks();
    }
  }, [dataState, fetchMyTracks]);

  return(
    <PlaylistProvider
      value={{
        dataState: dataState,
        nowPlaying: nowPlaying,
        prevTracks: recentPlays,
        setDataState: setDataState
      }}
    >
      {children}
    </PlaylistProvider>
  );
};

export default NowPlayingContext;
export {usePlaylist};
