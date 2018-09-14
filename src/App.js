import React, { Component } from "react";
import "./App.css";
import Game from "./components/game/Game";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>Welcome to Quiz Time</h1>
        <h5>Here you can test yourself and see how much you really know!</h5>
        <Game />
      </div>
    );
  }
}

export default App;
