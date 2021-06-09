import express, { Request, Response } from 'express';
import { playList, song as songSchema } from '../schema/playlists';

export const PlaylistRouter = express.Router();

PlaylistRouter.get('/', async (req: Request, res: Response) => {
    const lists = await playList.find();
    res.json(lists);
    res.status(200);
});

PlaylistRouter.post('/create', async (req: Request, res: Response) => {
    const newPlayList = new playList({
        ...req.body
    });
    const respPlaylist = await newPlayList.save();
    res.status(201).json(respPlaylist);
})

PlaylistRouter.patch('/addsong', async (req: Request, res: Response) => {
    const { playlistId, songId } = req.body;
    const song = await songSchema.findById(songId);
    const playlist = await playList.findById(playlistId);
    const updatedPlaylist = await playList.findByIdAndUpdate(playlistId, {
        songs: [
            ...playlist.songs,
            song._id
        ]
    },
        {
            useFindAndModify: true
        }
    )
    res.status(202).json(updatedPlaylist);
})