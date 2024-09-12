import { combineReducers } from 'redux';
import favReducer from './favReducer'
import movieReducer from './movieReducer';


export default combineReducers({
    movies: movieReducer,
    favorites: favReducer
});