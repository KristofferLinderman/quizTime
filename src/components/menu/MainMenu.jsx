import React, { Component } from "react";
import PropTypes from "prop-types";

class MainMenu extends Component {
  state = {
    difficulty: "easy"
  };
  onClick(event) {
    this.setState({ difficulty: event.target.value });
  }
  startGame(event) {
    this.props.startGame(this.state.difficulty);
  }
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Quiz Time</h1>
          <h3>Select difficulty</h3>
          <div className="row mx-auto">
            <button
              className="col btn btn-success m-1"
              onClick={this.onClick.bind(this)}
              value="easy"
            >
              Easy
            </button>
            <button
              className="col btn btn-warning m-1"
              onClick={this.onClick.bind(this)}
              value="medium"
            >
              Medium
            </button>
            <button
              className="col btn btn-danger m-1"
              onClick={this.onClick.bind(this)}
              value="hard"
            >
              Hard
            </button>
          </div>
          <h4>Current Difficulty</h4>
          <h4 className="text-uppercase">{this.state.difficulty}</h4>
          <button
            className="btn btn-success btn-lg"
            onClick={this.startGame.bind(this)}
          >
            Start Game
          </button>
        </div>
      </div>
    );
  }
}

MainMenu.propTypes = {
  startGame: PropTypes.func.isRequired
};

export default MainMenu;
