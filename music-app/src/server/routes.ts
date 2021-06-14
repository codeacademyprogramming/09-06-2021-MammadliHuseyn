import { PlaylistRouter } from "./playlists";
import { SongRouter } from "./songs";
import { AuthRouter } from "./users";

export const ROUTES = [
    {
        path: '/playlists',
        router: PlaylistRouter
    },
    {
        path: '/songs',
        router: SongRouter
    },
    {
        path: '/auth',
        router: AuthRouter
    }
]