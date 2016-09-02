const game = (state, action) => {
    switch (action.type) {
        case 'ADD_GAME':
            return {
                id: action.id,
                name: action.name,
                rating: action.rating,
                gameType: action.gameType,
            };
        default:
            return state;
    }
};

const games = (state = [], action) => {
    switch (action.type) {
        case 'ADD_GAME':
            return [
                ...state,
                game(undefined, action)
            ];
        case 'REMOVE_GAME':
            const nState = state.filter(game => {
                return game.id != action.id;
            });
            return nState;
        default:
            return state;
    }
};

export default games;