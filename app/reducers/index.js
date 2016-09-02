import { combineReducers } from 'redux';
import games from './games';

const gamesApp = combineReducers({
    games
});

export default gamesApp;