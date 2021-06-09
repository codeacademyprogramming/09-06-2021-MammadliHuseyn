import React from 'react';
import { useSelector } from 'react-redux';
import { IPlaylist, ISong } from '../../types/types';
import { PlayListItem } from './PlayListItem';
import { Link } from 'react-router-dom';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import { Button } from '@material-ui/core';

export default function Play() {
    const playlists = useSelector((state: { playlists: Array<IPlaylist>, songs: Array<ISong> }) => state.playlists);

    return (
        <div className="container mt-5">
            <Link to='/'><Button variant="contained" className="w-100 mb-3"><ArrowLeft /></Button></Link>
            <div className="row">
                {playlists.map(plist =>
                    <PlayListItem plist={plist} key={plist._id}/>
                )}
            </div>
        </div>
    )
}
