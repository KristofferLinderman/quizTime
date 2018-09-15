import React, { Component } from "react";
import classnames from "classnames";
//Time to answer the question
const startTime = 3;

class Timer extends Component {
  constructor() {
    super();

    this.state = {
      time: startTime,
      timer: 0
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  startTimer() {
    console.log("Start timer");
    this.timer = setInterval(this.countDownTimer.bind(this), 1000);
  }

  restartTimer() {
    this.setState({ time: startTime });
    this.startTimer();
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  countDownTimer() {
    //Take the seconds from the state and set state so it re-renders the text
    let currentTime = this.state.time - 1;
    this.setState({
      time: currentTime
    });

    this.checkTime();
  }

  checkTime() {
    if (this.state.time === 0) {
      //Calls the function given from the props
      this.props.timesUp();
      this.stopTimer();
    }
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h3 className={classnames("timer-text", { "time-ended": time === 0 })}>
          {time}s
        </h3>
      </div>
    );
  }
}

export default Timer;
