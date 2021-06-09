import { ISong } from "../../types/types";
import { ACTION_TYPES } from "./actionTypes";
import axios from 'axios';

export const getPlaylists = () => {
    return (dispatch: any) => {
        return axios.get('http://localhost:8080/playlists').then(
            ({ data }) => dispatch({ type: ACTION_TYPES.GET_PLAYLISTS, payload: data }),
            err => console.log(err)
        );
    };
};

export const addSongToPlaylist = (song: ISong) => {
    axios.post("http://localhost:8080/rooms/reservation", song)
        .then(({data}) => console.log(data));
}