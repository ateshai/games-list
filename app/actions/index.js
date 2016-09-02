import {v4} from 'node-uuid';

export const addGame = (name, gameType) => ({
    type:'ADD_GAME',
    id: v4(),
    rating: 0,
    name,
    gameType
});

export const removeGame = (id) => ({
    type:'REMOVE_GAME',
    id
});

export const rateGame = (id, rating) => ({
    type:'RATE_GAME',
    id,
    rating
});
