import React, { Component, PropTypes } from 'react';
import SortList from './SortList';
import AddGame from './AddGame';

class GamesList extends Component {
    constructor(props) {
        super(props);

        this.onRemoveGame = this.props.onRemoveGame.bind(this);
        this.onRateGame = this.props.onRateGame.bind(this);
    }

    render(){
        return (
            <div className="games-list">
                <SortList filter={this.props.filter} />
                <ul className="games">
                    {this.props.games.map((game, index) =>
                        <li className="game" key={index}>
                            <figure></figure>
                            <span className="name">{game.name}</span>
                            <span className="rating">
                                <ul className="rate">
                                    <li><a href="#" onClick={e => {
                                            e.preventDefault();
                                            this.onRateGame(game.id, 1);
                                        }}
                                        className={game.rating > 0 ? 'active': null}>
                                        &nbsp;
                                    </a></li>
                                    <li><a href="#" onClick={e => {
                                            e.preventDefault();
                                            this.onRateGame(game.id, 2);
                                        }}
                                           className={game.rating > 1 ? 'active': null}>
                                        &nbsp;
                                    </a></li>
                                    <li><a href="#" onClick={e => {
                                            e.preventDefault();
                                            this.onRateGame(game.id, 3);
                                        }}
                                           className={game.rating > 2 ? 'active': null}>
                                        &nbsp;
                                    </a></li>
                                    <li><a href="#" onClick={e => {
                                            e.preventDefault();
                                            this.onRateGame(game.id, 4);
                                        }}
                                           className={game.rating > 3 ? 'active': null}>
                                        &nbsp;
                                    </a></li>
                                    <li><a href="#" onClick={e => {
                                            e.preventDefault();
                                            this.onRateGame(game.id, 5);
                                        }}
                                           className={game.rating > 4 ? 'active': null}>
                                        &nbsp;
                                    </a></li>
                                </ul>
                            </span>
                            <span className="remove-game" onClick={e => {
                                e.preventDefault();
                                this.onRemoveGame(game.id);
                            }}>x</span>
                        </li>
                    )}
                </ul>

                <AddGame />
            </div>
        )
    }
}

GamesList.propTypes = {
    games: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        gameType: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    onRemoveGame: PropTypes.func.isRequired,
    onRateGame: PropTypes.func.isRequired
};

export default GamesList;
