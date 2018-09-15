import React, { Component } from "react";
import PropTypes from "prop-types";
//Time to answer the question
const startTime = 8;

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
    this.timer = setInterval(this.countDownTimer.bind(this), 1000);
  }

  restartTimer() {
    this.setState({ time: startTime });
    this.startTimer();
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  timeIncrease() {
    this.setState({ time: this.state.time + 10 });
  }

  countDownTimer() {
    //Take the seconds from the state and set state so it re-renders the text
    const currentTime = this.state.time - 1;
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
        {time > 0 && (
          <div>
            <h3>Time:</h3>
            <h3 className="timer-text">{time}s</h3>
          </div>
        )}
        {time === 0 && <h1 className="text-danger">Time's Up!</h1>}
      </div>
    );
  }
}

Timer.propTypes = {
  timesUp: PropTypes.func.isRequired
};

export default Timer;
