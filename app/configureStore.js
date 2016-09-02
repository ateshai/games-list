import { createStore } from 'redux';
import gamesApp from './reducers';
import {loadState, saveState} from './localStorage';
import {throttle} from 'lodash';
import games from './data/gamesList';

const configureStore = () => {
    const persistedState = loadState() || games;
    const store = createStore(
        gamesApp,
        persistedState
    );

    store.subscribe(throttle(() => {
        saveState({
            games: store.getState().games
        });
    }, 1000));

    return store;
};

export default configureStore;