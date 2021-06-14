import { ACTION_TYPES } from "./actionTypes";
import axios from 'axios';
import { Dispatch } from "react";
const uri = "http://localhost:8080/playlists";

export const getPlaylists = () => {
    return (dispatch: Dispatch<any>) => {
        return axios.get(`${uri}`).then(
            ({ data }) => dispatch({ type: ACTION_TYPES.GET_PLAYLISTS, payload: data }),
            err => console.log(err)
        );
    };
};

export const addSongToPlaylist = ({ playlistId, songId }: { playlistId: string, songId: string }) => {
    return (dispatch: Dispatch<any>) => {
        return axios.post(`${uri}/addToPlist`).then(
            ({ data }) => dispatch({ type: ACTION_TYPES.ADD_SONG_TO_PLAYLIST, payload: data }),
            err => console.log(err)
        );
    };
};