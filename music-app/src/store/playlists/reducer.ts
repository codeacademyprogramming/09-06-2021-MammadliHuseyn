import { IAction } from "../../types/types";
import { ACTION_TYPES } from "./actionTypes";
import { initialState } from "./initialState";

export const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case ACTION_TYPES.GET_PLAYLISTS:
            return action.payload || state;
        default:
            return state;
    }
}