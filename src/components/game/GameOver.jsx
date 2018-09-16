import React, { Component } from "react";
import PropTypes from "prop-types";

class GameOver extends Component {
  render() {
    const { correct, incorrect, unanswered } = this.props.score;
    return (
      <div>
        <h1>Correct Questions: {correct}</h1>
        <h1>Incorrect Questions: {incorrect}</h1>
        <h1>Unanswered Questions: {unanswered}</h1>
      </div>
    );
  }
}

GameOver.propTypes = { score: PropTypes.object.isRequired };

export default GameOver;
