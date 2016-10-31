import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addGame } from '../actions';

class AddGameComponent extends Component {
  constructor(props) {
      super(props);
      this.onAddGame = this.props.onAddGame.bind(this);
  }
  render () {
    let titleInput, typeInput;
    return (
      <div className="add-game">
          <form onSubmit={e => {
                  e.preventDefault();
                  if (!titleInput.value.trim() || !typeInput.value.trim() ) {
                      return;
                  }
                  this.onAddGame(titleInput.value, typeInput.value);
                  titleInput.value = typeInput.value = '';
              }
          }>
              <div className="npt">
                  <label htmlFor="name">Title:</label>
                  <input id="name" type="text" ref={node => {titleInput = node; }} />
              </div>
              <div className="npt">
                  <label htmlFor="type">Type:</label>
                  <input id="type" type="text" ref={node => {typeInput = node; }} />
              </div>
              <div className="npt">
                  <button type="submit">Create</button>
              </div>
          </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    onAddGame(title,gameType) {
        dispatch(addGame(title, gameType));
    }
});

const AddGame = connect(
  () => ({}), // returns empty object
  mapDispatchToProps
)(AddGameComponent);

export default AddGame;
