import express, { Request, Response } from 'express';
import Bcrypt from 'bcrypt';
import { user as userSchema } from '../schema/playlists';
import { IUser } from '../types';

export const AuthRouter = express.Router();

AuthRouter.post('/register', async (req: Request, res: Response) => {
    try {
        req.body.password = Bcrypt.hashSync(req.body.password, 10);
        const user = new userSchema(req.body);
        const result = await user.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

AuthRouter.post("/login", async (req: Request, res: Response) => {
    try {
        const user: IUser = await userSchema.findOne({ username: req.body.username }).exec();
        if (!user) {
            return res.status(400).send({ message: "The username does not exist" });
        }
        if (!Bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(400).send({ message: "The password is invalid" });
        }
        user.password = '';
        res.json(user);
    } catch (error) {
        res.status(500).send(error);
    }
});