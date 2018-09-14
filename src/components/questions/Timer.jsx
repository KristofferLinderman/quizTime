import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: 15,
    timer: 0
  };

  startTimer() {
    console.log("Start timer");
    this.timer = setInterval(this.countDown.bind(this), 1000);
  }

  componentDidMount() {
    this.startTimer();
  }

  countDown() {
    //Take the seconds from the state and set state so it re-renders the text
    let currentTime = this.state.time - 1;
    this.setState({
      time: currentTime
    });

    // Check if the time is up
    if (currentTime === 0) {
      //Calls the function given from the props
      this.props.timesUp();
      clearInterval(this.timer);
    }
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h3 className="timer-text">{time}s</h3>
      </div>
    );
  }
}

export default Timer;
