import { PlaylistRouter } from "./playlists";
import {SongRouter} from "./songs";

export const ROUTES = [
    {
        path: '/playlists',
        router: PlaylistRouter
    },
    {
        path: '/songs',
        router: SongRouter
    }
]