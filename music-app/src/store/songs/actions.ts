import axios from "axios";
import { Dispatch } from "react";
import { ISong } from "../../types/types";
import { ACTION_TYPES } from "./actionTypes";
const uri = "http://localhost:8080/songs";

export const getSongs = () => {
    return (dispatch: Dispatch<any>) => {
        return axios.get(`${uri}`).then(
            ({ data }) => dispatch({ type: ACTION_TYPES.GET_SONGS, payload: data }),
            err => console.log(err)
        );
    };
};

export const createSong = (song: ISong) => {
    return (dispatch: Dispatch<any>) => {
        return axios.post(`${uri}/create`, song).then(
            ({ data }) => dispatch({ type: ACTION_TYPES.ADD_SONG, payload: data }),
            err => console.log(err)
        )
    }
}

export const deleteSong = (_id: string) => {
    return (dispatch: Dispatch<any>) => {
        return axios.delete(`${uri}/delete/${_id}`).then(
            ({ data }) => dispatch({ type: ACTION_TYPES.DELETE_SONG, payload: data }),
            err => console.log(err)
        )
    }
}

export const updateSong = (song: ISong) => {
    const { _id } = song;
    return (dispatch: Dispatch<any>) => {
        return axios.patch(`${uri}/update/${_id}`, song).then(
            ({ data }) => dispatch({ type: ACTION_TYPES.UPDATE_SONG, payload: data }),
            err => console.log(err)
        )
    }
}