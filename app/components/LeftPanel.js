import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router'


class LeftPanel extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const group = this.props.group;
        const types = this.props.types;
        const ratings = this.props.ratings;
        return(
            <div className="left-panel">
                <div className="row">
                <ul className="menu">
                    <li className={group == 'gameType' ? "menu-item active" : "menu-item"}>
                        <Link to='/gameType'>
                            <span>By gameType</span>
                        </Link>

                        <ul className="sub-menu">
                            {types.map((t,i) => {
                                return(
                                    <li className="sub-menu-item" key={i}>
                                        <Link
                                            to={'/gameType/'+ t.gameType}
                                            activeStyle={{ backgrounColor: '#ececec' }}
                                        >
                                            <span>{t.gameType + ' (' + t.count + ')' }</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                    <li className={group == 'rating' ? "menu-item active" : "menu-item"}>
                        <Link to='/rating'>
                            <span>By Rating</span>
                        </Link>
                        <ul className="sub-menu">
                            {ratings.map((r,i) => {
                                return(
                                    <li className="sub-menu-item" key={i}>
                                        <Link
                                            to={'/rating/'+ r.gameType}
                                            activeStyle={{ textDecoration: 'none', color:'black' }}
                                        >
                                            <span>{r.gameType + ' stars (' + r.count + ')' }</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                    <li className={group == 'all' ? "menu-item active" : "menu-item"}>
                        <Link
                            to='/all'
                            activeStyle={{ textDecoration: 'none', color:'black' }}
                        >
                            <span>All</span>
                        </Link>

                    </li>
                </ul>
                </div>
            </div>
        )
    }
}

const countItems = (arr, what) =>{
    var count= 0, i;
    while((i= arr.indexOf(what, i))!= -1){
        ++count;
        ++i;
    }
    return count
};

const getGroupProps = (games, prop) => {
    let propsChunk = games.map(p => {
        var gameType = p[prop];
        return gameType;
    });

    let props = propsChunk.filter((p,i,s)=>{
       return i == s.indexOf(p);
    });

    props = props.map(p => {
        var prop = {gameType: p, count: countItems(propsChunk, p)};
        return prop;
    });
    props = props.sort((a,b) =>{
        if (a.gameType < b.gameType) {
            return (prop == 'gameType' ? -1 : 1);
        }
        if (a.gameType > b.gameType) {
            return (prop == 'gameType' ? 1 : -1);
        }
        return 0;
    });
    return props;
};


const mapStateToProps = (state, ownProps) => ({
    types: getGroupProps(
        state.games,
        'gameType'
    ),
    ratings: getGroupProps(
        state.games,
        'rating'
    )
});

const mapDispatchToProps = (dispatch) => ({
    onSort(id) {
        dispatch(toggleTodo(id));
    },
});


export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftPanel);
