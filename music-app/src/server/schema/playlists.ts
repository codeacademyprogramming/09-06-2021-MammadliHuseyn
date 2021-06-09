import mongoose from 'mongoose';
import Bcrypt from 'bcrypt';

const songSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    uploadDate: {
        type: String,
        required: true
    },
    mediaUrl: {
        type: String,
        required: true
    }
})

const playListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    songs: {
        type: Array
    }
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    playlists: {
        type: Array
    }
})

export const playList = mongoose.model('Playlist', playListSchema);
export const song = mongoose.model('Song', songSchema);
export const user = mongoose.model('User', userSchema);