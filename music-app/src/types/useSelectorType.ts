import { IPlaylist, ISong, IUser } from "./types";

export interface ISelector {
    playlists: Array<IPlaylist>;
    songs: Array<ISong>;
    user: IUser
}