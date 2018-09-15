import React, { Component } from "react";
import "./App.css";
import MainMenu from "./components/menu/MainMenu";
import Game from "./components/game/Game";

class App extends Component {
  state = { startGame: false, difficulty: "easy" };

  startGame(difficulty) {
    console.log(difficulty);

    this.setState({ difficulty, startGame: true });
  }

  render() {
    const { startGame, difficulty } = this.state;

    return (
      <div className="App container">
        <h1>Welcome to Quiz Time</h1>
        <h5>Here you can test yourself and see how much you really know!</h5>
        {!startGame && <MainMenu startGame={this.startGame.bind(this)} />}
        {startGame && <Game difficulty={difficulty} />}
      </div>
    );
  }
}

export default App;
