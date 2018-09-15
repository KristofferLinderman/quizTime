import React, { Component } from "react";
import PropTypes from "prop-types";

class GameOver extends Component {
  render() {
    const { score } = this.props;
    return (
      <div>
        <h1>Final Score: {score}</h1>
      </div>
    );
  }
}

GameOver.propTypes = { score: PropTypes.number.isRequired };

export default GameOver;
