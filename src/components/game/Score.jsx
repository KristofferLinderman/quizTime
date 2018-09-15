import React, { Component } from "react";

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

export default Score;
