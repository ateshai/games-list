import React, { Component, PropTypes } from 'react';
import { sortGames } from '../actions';
import { connect } from 'react-redux';

export class SortListComponent extends Component {
    constructor(props) {
        super(props);
        this.onSortGames = this.props.onSortGames.bind(this);
    }
    componentWillMount(){
        this.setState({
            sortByIncrease: false
        })
    }
    render() {
        return (
            <div className="sort">
                <span>Sort by:
                    <a href="#" onClick={e => {
                        if(e) e.preventDefault();
                        this.props.onSortGames(this.props.filter, this.state.sortByIncrease);
                        this.setState({
                            sortByIncrease: !this.state.sortByIncrease
                        });
                    }}>
                        { (this.state.sortByIncrease) ? "Decrease" : "Increase" }
                    </a>
                </span>
            </div>
        )
    }
}

// SortListComponent.propTypes = {
//     onSortGames: PropTypes.func.isRequired
// };
const mapStateToProps = (state) => ({
    games: state.games
});
const mapDispatchToProps = (dispatch) => ({
    onSortGames(filter, asc) {
        dispatch(sortGames(filter, asc));
    }
});

const SortList =  connect(
    mapStateToProps,
    mapDispatchToProps
)(SortListComponent);

export default SortList;




