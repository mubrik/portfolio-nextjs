/**
* declaration to add options to mui/material/styles create theme
*/
declare module '@mui/material/styles' {
  // allow configuration using `createTheme`
  interface Palette {
    type: "dark" | "light";
  }
  interface PaletteOptions {
    type?: string;
    warning?: PaletteColorOptions
  }
  interface PaletteColorOptions {
    light?: string;
    main: string;
    dark?: string;
  }
}

/**
* darkmode context
*/
export interface IDarkModeState {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

// homepage state enum
export type IHomePageState = "profile" | "projects" | "nowPlaying";
/**
* homepage context
*/
export interface IHomePageContext {
  state: IHomePageState;
  setHomePageState: React.Dispatch<React.SetStateAction<IHomePageState>>;
}

/**
* project details type
*/
interface IProjectObj {
  header: string;
  content: string;
  description: string;
  codeLink: string;
  imageUri: string;
  siteLink?: string;
}

// last fm data fetching state
export type ILastFmDataState = "idle"| "loaded" | "loading" | "error"

// last fm data types
export interface ILastFMTrackObj {
  artist: {mbid: string; "#text": string;};
  image: ITrackImageObj[]
  name: string;
  date?: {uts: string; "#text": string;}
  url?: string;
}

export interface ILastFMTrackImageObj {
  size: string;
  "#text": string;
}

export interface ITrackDetail {
  artist: string;
  title: string;
  image: string;
  date: string;
  timeMs: string;
}

/**
* interface for context object
*/
 export interface IPlaylist {
  dataState: IDataState;
  nowPlaying: ISongDetail | null;
  prevTracks: ISongDetail[] | null;
  setDataState: React.Dispatch<React.SetStateAction<IDataState>>;
}