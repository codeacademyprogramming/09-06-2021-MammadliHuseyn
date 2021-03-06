import axios from "axios";
import { Dispatch } from "react";
import { IUser } from "../../types/types";
import { ACTION_TYPES } from "./actionTypes";
const uri = "http://localhost:8080/auth";

export const register = (user: IUser) => {
    axios.post(`${uri}/register`, user);
}

export const login = (user: IUser) => {
    return (dispatch: Dispatch<any>) => {
        return axios.post(`${uri}/login`, user).then(
            ({ data }) => dispatch({ type: ACTION_TYPES.LOG_IN, payload: data }),
            err => err.response.data
        );
    };
}