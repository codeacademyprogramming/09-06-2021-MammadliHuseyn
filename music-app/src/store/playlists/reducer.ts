import { TActionPlaylist } from "../../types/types";
import { ACTION_TYPES } from "./actionTypes";
import { initialState } from "./initialState";

export const reducer = (state = initialState, action: TActionPlaylist) => {
    switch (action.type) {
        case ACTION_TYPES.GET_PLAYLISTS:
            return action.payload || state;
        case ACTION_TYPES.ADD_SONG_TO_PLAYLIST:
            return state.map(plist => {
                if (plist._id === action.payload.playlistId) {
                    plist.songs = [
                        ...plist.songs,
                        action.payload.songId
                    ]
                }
                return plist;
            })
        default:
            return state;
    }
}