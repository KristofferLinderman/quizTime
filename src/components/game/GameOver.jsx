import React, { Component } from "react";

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

export default GameOver;
