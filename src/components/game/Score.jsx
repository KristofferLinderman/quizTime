import React, { Component } from "react";
import PropTypes from "prop-types";

class Score extends Component {
  render() {
    const { score } = this.props;
    return (
      <div>
        <h1>Score: {score}</h1>
      </div>
    );
  }
}

Score.propTypes = {
  score: PropTypes.number.isRequired
};

export default Score;
