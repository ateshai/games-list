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
        case 'SORT_GAMES':
            let sState = [...state];
            switch (action.filter){
                case "5" :
                case "4" :
                case "3" :
                case "2" :
                case "1" :
                case "0" :
                    sState = sState.sort(function(a,b){
                        if (action.asc && a.name.toUpperCase() < b.name.toUpperCase()
                            || !action.asc && a.name.toUpperCase() > b.name.toUpperCase()) {
                            return -1;
                        }
                        if (action.asc && a.name.toUpperCase() > b.name.toUpperCase()
                            || !action.asc && a.name.toUpperCase() < b.name.toUpperCase()) {
                            return 1;
                        }
                        return 0;
                    });
                    break;
                default:
                    sState = sState.sort(function(a,b){
                        if (action.asc && a.rating < b.rating
                            || !action.asc && a.rating > b.rating) {
                            return -1;
                        }
                        if (action.asc && a.rating > b.rating
                            || !action.asc && a.rating < b.rating) {
                            return 1;
                        }
                        return 0;
                    });
                    break;
            }

            return sState;
        default:
            return state;
    }
};

export default games;