import React from 'react';
import { useSelector } from 'react-redux';
import { IPlaylist, ISong } from '../../types/types';


export const PlayListItem: React.FC<{ plist: IPlaylist }> = ({ plist }) => {
    const songs = useSelector((state: { playlists: Array<IPlaylist>, songs: Array<ISong> }) => state.songs);

    return (
        <div className="col-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{plist.name}</h5>
                    <ul className="list-group">
                        {plist.songs.map(sg => {
                            const song = songs.find(song => song._id === sg.toString());
                            return (
                                <li className="list-group-item" key={song?._id}>
                                    <p>{song?.name}</p>
                                    <iframe width="265" height="200" src={song?.mediaUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </li>);
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
