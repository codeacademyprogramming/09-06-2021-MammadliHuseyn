import { ACTION_TYPES } from "../store/playlists/actionTypes";

export interface ISong {
    _id?: string;
    name: string;
    artist:string;
    uploadDate: string;
    mediaUrl: string;
}

export interface IPlaylist {
    _id?: string;
    name: string;
    date: string;
    author: string;
    songs: Array<ISong>;
}

export interface IActionAdd {
    type: ACTION_TYPES.ADD_SONG_TO_PLAYLIST;
    payload: ISong;
}

export interface IActionGet {
    type: ACTION_TYPES.GET_PLAYLISTS;
    payload: Array<IPlaylist>;
}

export type IAction = IActionAdd | IActionGet;