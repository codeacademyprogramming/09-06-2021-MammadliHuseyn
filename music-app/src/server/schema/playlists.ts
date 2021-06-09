import mongoose, { Schema } from 'mongoose';

const songSchema = new Schema({
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

const playListSchema = new Schema({
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

export const playList = mongoose.model('Playlist', playListSchema);
export const song = mongoose.model('Song', songSchema);