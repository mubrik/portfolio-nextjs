import type { NextApiRequest, NextApiResponse } from "next";
// typess
import {ILastFMTrackObj, ITrackDetail } from "../../../custom-types";

const handler = async ( req: NextApiRequest, res: NextApiResponse<ITrackDetail[]>): Promise<void> => {
  if (req.method === "GET") {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=mubrik&api_key=${process.env.LASTFM_API}&format=json&limit=4`
    );
    const result = await response.json();
  
    const reqObj: ILastFMTrackObj[] = [...result["recenttracks"]["track"]];

    const formatedArray: ITrackDetail[] = reqObj.map((track, index) => {
      return({
        artist: track.artist["#text"],
        title: track.name,
        image: track.image ? track.image[2]["#text"] as string : "", // image is an array of diff size url, index 2 is large
        date: track.date ? track.date["#text"] : "",
        timeMs: track.date ? track.date.uts : ""
      });
    });

    res.status(200).send(formatedArray);
  } else {
    res.status(404);
  }
};

export default handler;