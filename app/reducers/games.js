const game = (state, action) => {
    switch (action.type) {
        case 'ADD_GAME':
            return {
                id: action.id,
                name: action.name,
                rating: action.rating,
                gameType: action.gameType,
            };

        case 'RATE_GAME':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                rating: action.rating
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
        case 'RATE_GAME':
            return state.map(t =>
                game(t, action)
            );
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