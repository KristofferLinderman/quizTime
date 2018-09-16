import React, { Component } from "react";
import PropTypes from "prop-types";
import DifficultySelector from "./DifficultySelector";

class MainMenu extends Component {
  constructor() {
    super();

    this.state = {
      difficulty: "easy"
    };

    this.onClick = this.onClick.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  onClick(level) {
    this.setState({ difficulty: level });
  }

  startGame(event) {
    this.props.startGame(this.state.difficulty);
  }

  render() {
    const menuStyle = { backgroundColor: "#eee", color: "#000e4e" };

    return (
      <div className="card" style={menuStyle}>
        <div className="card-body">
          <h1 className="card-title">Quiz Time</h1>
          <DifficultySelector onClick={this.onClick} />
          <h4>Current Difficulty</h4>
          <h4 className="text-uppercase">{this.state.difficulty}</h4>
          <button className="btn btn-success btn-lg" onClick={this.startGame}>
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
