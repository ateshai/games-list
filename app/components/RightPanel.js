import { connect } from 'react-redux';
import { addGame, removeGame } from '../actions';
import GamesList from './GamesList';

const getGames = (games, props) => {
    if(props.filter === "all") {
        return games;
    } else {
        return games.filter(t => {
            if(props.group == 'gameType') {
                if(t.gameType === props.filter){
                    return t
                }
            }

            if(t.rating.toString() === props.filter){
                return t
            }
        });
    }
};

const mapStateToProps = (state, ownProps) => ({
    games: getGames(
        state.games,
        ownProps
    ),
});

const mapDispatchToProps = (dispatch) => ({
    onAddGame(title,gameType) {
        dispatch(addGame(title, gameType));
    },
    onRemoveGame(id) {
        dispatch(removeGame(id));
    }
});

const RightPanel = connect(
    mapStateToProps,
    mapDispatchToProps
)(GamesList);

export default RightPanel;





