import { TActionUsers } from "../../types/types";
import { ACTION_TYPES } from "./actionTypes";
import { initialstate } from "./initialState";

export const reducer = (state = initialstate, action: TActionUsers) => {
    switch (action.type) {
        case ACTION_TYPES.LOG_IN:
            return {
                ...state,
                ...action.payload
            }
        case ACTION_TYPES.LOG_OUT:
            return {
                ...initialstate
            };
        default:
            return state;
    }
}