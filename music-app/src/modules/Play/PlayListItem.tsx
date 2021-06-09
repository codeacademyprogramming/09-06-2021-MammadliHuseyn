import React from 'react';
import { useSelector } from 'react-redux';
import { IPlaylist, ISong } from '../../types/types';


export const PlayListItem: React.FC<{ plist: IPlaylist }> = ({ plist }) => {
    const songs = useSelector((state: { playlists: Array<IPlaylist>, songs: Array<ISong> }) => state.songs);

    return (
        <div className="col-6">
            <div className="card">
                <div className="card-body">
                    <h1 className="card-title">{plist.name}</h1>
                    <ul className="list-group">
                        {plist.songs.map(sg => {
                            const song = songs.find(song => song._id === sg.toString());
                            return (
                                <li className="list-group-item" key={sg}>
                                    <p>{song?.artist} - {song?.name}</p>
                                    <audio className="w-100 btn" controls onPause={(e)=>console.log(e)}>
                                        <source src={song?.mediaUrl} />
                                    </audio>
                                </li>);
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}