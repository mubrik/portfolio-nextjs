import type { NextApiRequest, NextApiResponse } from "next";
// types
import { IProjectObj } from "../../../custom-types";

const handler = ( req: NextApiRequest, res: NextApiResponse<IProjectObj[]> ): void  => {
  res.status(200).send([
    {
        "header":"UUID Project",
        "description": "UUID Generator",
        "content": "Simple API UUID generator, using django rest framework apiview and model serializer. UUID generated by python uuid module",
        "codeLink": "https://github.com/mubrik/uuid_api",
        "imageUri": ""
    },
    {
        "header":"Noted Project",
        "description": "Basic note taking app (deprecated)",
        "content": "My first project, Built with a Django backend serving static templates, Basic app for note/code taking.",
        "siteLink": "https://noted.mubrik.com",
        "codeLink": "https://github.com/mubrik/alphanote",
        "imageUri": "/pro.gif"
    },
    {
        "header":"Carded Project",
        "description": "Noted app Revisited :)",
        "content": "Django backend with Rest frameworks, Using React for front end and redux for state management.",
        "siteLink": "https://carded.mubrik.com",
        "codeLink": "https://github.com/mubrik/carded-djangorest/tree/frontend",
        "imageUri": "/proj2.gif"
    },
    {
        "header":"Binance API Project",
        "description": "Coin-Pair Request Server",
        "content": "Django backend, using JSON as I/O, Official binance Python API, Server can be hosted and used to fetch pair prices, candle sticks and more",
        "codeLink": "https://github.com/mubrik/djangobinance-api",
        "imageUri": ""
    },
    {
        "header":"Chrome LastFm Extension",
        "description": "An extension for google chrome",
        "content": "A chrome extenson that updates scrobbles music from youtube music player to the lastfm tracking service",
        "siteLink": "https://chrome.google.com/webstore/detail/chrome-youtube-music-last/lialnofdeccppcbgnlkfpnokgaelapco",
        "codeLink": "https://github.com/mubrik/simple-chrome-extension",
        "imageUri": ""
    },
    {
        "header":"MS Sharepoint Time-sheet Webpart",
        "description": "A webpart created for use on MS Sharepoint online",
        "content": "App is used to log different projects/tasks carried out by agents in a timeperiod for the organization",
        "codeLink": "https://github.com/mubrik/sharepoint-WB-timesheet",
        "imageUri": "/webpartTS.gif"
    }
  ]);

};

export default handler;