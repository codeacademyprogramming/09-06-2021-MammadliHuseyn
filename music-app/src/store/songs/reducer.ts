import { ISong, TActionSongs } from "../../types/types";
import { ACTION_TYPES } from "./actionTypes";

export const reducer = (state: Array<ISong> = [], action: TActionSongs) => {
    switch (action.type) {
        case ACTION_TYPES.GET_SONGS:
            return action.payload;
        case ACTION_TYPES.ADD_SONG:
            return [
                ...state,
                action.payload
            ]
        case ACTION_TYPES.DELETE_SONG:
            return state.filter(song => song._id !== action.payload);
        case ACTION_TYPES.UPDATE_SONG:
            return state.map(song => {
                if (song._id === action.payload._id) {
                    song = { ...song, ...action.payload };
                }
                return song;
            });
        default:
            return state;
    }
}