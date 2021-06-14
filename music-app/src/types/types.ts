import { ACTION_TYPES as PLIST_ACTIONS } from "../store/playlists/actionTypes";
import { ACTION_TYPES as SONG_ACTIONS } from "../store/songs/actionTypes";
import { ACTION_TYPES as USER_ACTIONS } from "../store/user/actionTypes";

export interface ISong {
    _id?: string;
    name: string;
    artist: string;
    uploadDate: string;
    mediaUrl: string;
}
export interface IPlaylist {
    _id?: string;
    name: string;
    date: string;
    author: string;
    songs: Array<string>;
}
export interface IUser {
    _id?: string;
    username: string;
    password: string;
    playlists?: Array<string>;
}

export interface IActionGetPlaylists {
    type: PLIST_ACTIONS.GET_PLAYLISTS;
    payload: Array<IPlaylist>;
}
export interface IActionAddSongToPlaylist {
    type: PLIST_ACTIONS.ADD_SONG_TO_PLAYLIST;
    payload: { playlistId: string, songId: string };
}

export interface IActionGetSongs {
    type: SONG_ACTIONS.GET_SONGS;
    payload: Array<ISong>;
}
export interface IActionAddSong {
    type: SONG_ACTIONS.ADD_SONG;
    payload: ISong;
}
export interface IActionUpdateSong {
    type: SONG_ACTIONS.UPDATE_SONG;
    payload: ISong;
}
export interface IActionDeleteSong {
    type: SONG_ACTIONS.DELETE_SONG;
    payload: string; //song._id
}

export interface IActionLogInUser {
    type: USER_ACTIONS.LOG_IN;
    payload: IUser;
}
export interface IActionLogOutUser {
    type: USER_ACTIONS.LOG_OUT;
    payload: string; //user._id
}

export type TActionPlaylist = IActionAddSongToPlaylist | IActionGetPlaylists;
export type TActionSongs = IActionGetSongs | IActionAddSong | IActionDeleteSong | IActionUpdateSong;
export type TActionUsers = IActionLogInUser | IActionLogOutUser;