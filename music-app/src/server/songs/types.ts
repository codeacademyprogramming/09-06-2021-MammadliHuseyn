export interface ISong {
    _id?: string;
    name: string;
    uploadDate: string;
    mediaUrl: string;
}

export interface IPlaylist {
    _id?: string;
    name: string;
    date: string;
    author: string;
    songs: Array<ISong>;
}