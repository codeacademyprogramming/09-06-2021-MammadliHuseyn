import express, { Request, Response } from 'express';
import { song } from '../schema/playlists';

export const SongRouter = express.Router();

SongRouter.get('/', async (req: Request, res: Response) => {
    const songList = await song.find();
    res.json(songList);
    res.status(200);
});

SongRouter.post('/create', async (req: Request, res: Response) => {
    const newSong = new song({
        ...req.body
    })
    const respSong = await newSong.save();
    res.status(201).json(respSong);
})

SongRouter.delete('/delete/:_id', async (req: Request, res: Response) => {
    const { _id } = req.params;
    await song.findByIdAndRemove(_id);
    res.status(204).json(_id.toString());
})

SongRouter.patch('/update/:_id', async (req: Request, res: Response) => {
    const { _id } = req.params;
    await song.findByIdAndUpdate(_id, req.body, {
        useFindAndModify: true
    })
    const respSong = song.findById(_id);
    res.status(202).json(respSong);
})