import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylists } from '../../store/playlists/actions';
import { Playlist } from '../Playlists';
import { IPlaylist, ISong } from './../../types/types';

export default function CreateSong() {
    const initialState: ISong = {
        name: "",
        mediaUrl: "",
        artist: "",
        uploadDate: Date.now().toString(),
    }
    const songToPlaylistInitial = {
        playlistId: "",
        songId: ""
    }

    const [newSong, setNewSong] = React.useState<ISong>(initialState);
    const [songs, setSongs] = React.useState<Array<ISong>>([]);
    const [isUpdateMode, setIsUpdateMode] = React.useState<boolean>(false);
    const [songsToPlayList, setSongsToPlayList] = React.useState(songToPlaylistInitial);
    const playlists = useSelector((state: Array<IPlaylist>) => state);
    const dispatch = useDispatch();

    const songChangeHandler = (e: any) => {
        const { name, value } = e.target;
        setNewSong(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    const addSong = (e: any) => {
        e.preventDefault();
        if (isUpdateMode) {
            axios.patch(`http://localhost:8080/songs/update/${newSong._id}`, newSong)
                .then(({ data }) => console.log(data));
            setIsUpdateMode(false);
        }
        else {
            axios.post('http://localhost:8080/songs/create', newSong)
                .then(({ data }) => console.log(data));
        }
        setNewSong(initialState);
    }
    const deleteSong = (_id: string) => {
        const isConfirm = window.confirm("are you sure to delete?");
        if (isConfirm) {
            axios.delete(`http://localhost:8080/songs/delete/${_id}`)
                .then(({ data }) => console.log(data));
        }
    }
    const updateSong = (song: ISong) => {
        setIsUpdateMode(true);
        setNewSong(prevState => {
            return {
                ...prevState,
                ...song
            }
        })
    }
    const songToPlayListChangeHandler = (e: any) => {
        const { name, value } = e.target;
        setSongsToPlayList(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    const addSongToPlayList = (e: any) => {
        e.preventDefault();
        axios.patch('http://localhost:8080/playlists/addsong', songsToPlayList)
        .then(() => dispatch(getPlaylists()));
        setSongsToPlayList(songToPlaylistInitial);
    }

    React.useEffect(() => {
        axios.get('http://localhost:8080/songs')
            .then(({ data }) => setSongs(data));
    }, [songs])

    return (
        <div className="container">
            <div className="d-flex">
                <form onSubmit={addSong} className="w-25 mr-5">
                    {isUpdateMode
                        ? <h1>Update song</h1>
                        : <h1>Add song</h1>
                    }
                    <input name="name" value={newSong.name} onChange={songChangeHandler} placeholder="name" className="form-control" />
                    <br />
                    <input name="mediaUrl" value={newSong.mediaUrl} onChange={songChangeHandler} placeholder="media url" className="form-control" />
                    <br />
                    <input name="artist" value={newSong.artist} onChange={songChangeHandler} placeholder="artist name" className="form-control" />
                    <br />
                    {isUpdateMode
                        ? <button className="btn btn-info w-100">Update Song</button>
                        : <button className="btn btn-success w-100">Add song</button>
                    }
                </form>
                <Playlist />
                <form onSubmit={addSongToPlayList} className="ml-5">
                    <h1>Add song to playlist</h1>
                    <select name="playlistId" className="form-control" onChange={songToPlayListChangeHandler}>
                        <option value="Select Playlist">Select Playlist</option>
                        {playlists.map(plist =>
                            <option value={plist._id} key={plist._id}>{plist.name}</option>
                        )}
                    </select>
                    <br />
                    <select name="songId" className="form-control" onChange={songToPlayListChangeHandler}>
                        <option value="Select Song">Select Song</option>
                        {songs.map(song =>
                            <option value={song._id} key={song._id}>{song.name}</option>
                        )}
                    </select>
                    <br />
                    <button className="btn btn-success w-100">Add song to playlist</button>
                </form>
            </div>
            <div>
                <h1 className="mt-5">Song list in Database</h1>
                <ul className="list-group">
                    {songs.map(song =>
                        <React.Fragment key={song._id}>
                            <li className="mt-3 list-group-item">
                                name : {song.name}
                                <br />
                                    url : {song.mediaUrl}
                                <br />
                                    artist : {song.artist}
                                <br />
                                <button className="btn btn-danger mr-2" onClick={() => deleteSong(song._id!)}>Delete</button>
                                <button className="btn btn-info mr-2" onClick={() => updateSong(song)}>Update</button>
                            </li>
                        </React.Fragment>
                    )}
                </ul>
            </div>
        </div>
    )
}
