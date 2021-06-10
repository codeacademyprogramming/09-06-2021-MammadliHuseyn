import { combineReducers } from 'redux';
import { reducer as PlistReducer } from './playlists/reducer';
import { reducer as SongReducer } from './songs/reducer';
import { reducer as UserReducer } from './user/reducer';

export const rootReducer = combineReducers({
    playlists: PlistReducer,
    songs: SongReducer,
    user: UserReducer
})