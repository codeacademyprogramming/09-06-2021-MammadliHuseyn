import { Button } from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getPlaylists } from '../../store/playlists/actions';
import { IPlaylist } from './../../types/types';
import { Link } from 'react-router-dom';
import PlayButton from '@material-ui/icons/PlayArrow';

export const Playlist = () => {
    const initialState: IPlaylist = {
        name: "",
        author: "",
        date: Date.now().toString(),
        songs: []
    }
    const dispatch = useDispatch();
    const [newPlaylist, setNewPlaylist] = React.useState<IPlaylist>(initialState);
    const songChangeHandler = (e: any) => {
        const { name, value } = e.target;
        setNewPlaylist(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    const addPlayList = (e: any) => {
        e.preventDefault();
        axios.post('http://localhost:8080/playlists/create', newPlaylist)
            .then(() => dispatch(getPlaylists()));
    }
    return (
        <div>
            <form onSubmit={addPlayList} className="w-100 mr-5">
                <h1>Add playlist</h1>
                <input name="name" value={newPlaylist.name} onChange={songChangeHandler} placeholder="name" className="form-control" />
                <br />
                <input name="author" value={newPlaylist.author} onChange={songChangeHandler} placeholder="author name" className="form-control" />
                <br />
                <button className="btn btn-success w-100">Add Playlist</button>
            </form>
            <br />
            <Link to='/play'><Button variant="contained" className="w-100"><PlayButton /></Button></Link>
        </div>
    )
}
