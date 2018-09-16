import React, { Component } from "react";
import "./App.css";
import MainMenu from "./components/menu/MainMenu";
import Game from "./components/game/Game";

class App extends Component {
  constructor() {
    super();
    this.state = { startGame: false, difficulty: "easy" };

    this.startGame = this.startGame.bind(this);
  }

  startGame(difficulty) {
    this.setState({ difficulty, startGame: true });
  }

  render() {
    const { startGame, difficulty } = this.state;
    const appStyle = { textAlign: "center", color: "#eee" };

    return (
      <div className="App container mt-3" style={appStyle}>
        <h1>Welcome to Quiz Time</h1>
        <h5>Here you can test yourself and see how much you really know!</h5>
        {!startGame && <MainMenu startGame={this.startGame} />}
        {startGame && <Game difficulty={difficulty} />}
      </div>
    );
  }
}

export default App;
