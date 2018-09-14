import React, { Component } from "react";
import Timer from "./Timer";
import QuestionInput from "./QuestionInput";

export default class Question extends Component {
  state = {
    timesUp: false
  };

  btnClick(event) {
    const input = event.target.value;
    const correctAnswer = this.props.question.correctAnswer;

    console.log("Input: " + input + " Corr: " + correctAnswer);

    if (input === correctAnswer) {
      console.log("Correct!");
      event.target.classList.add("btn-success");
    } else {
      console.log("Wrong!");

      event.target.classList.add("btn-danger");
    }
  }

  //Called when the timer is up
  timesUp(event) {
    console.log("Times Up!");
    this.setState({ timesUp: true });
  }

  nextQuestion() {
    this.setState({ timesUp: false });
    this.props.nextQuestion();
  }

  render() {
    console.log(this.props.question);

    const { question, correctAnswer, answers } = this.props.question;
    const id = this.props.id + 1;
    return (
      <div className="card">
        <Timer timesUp={this.timesUp.bind(this)} />
        <div className="card-body">
          <h1 className="card-title">Question {id}</h1>
          <p className="card-text">{question}</p>
          {!this.state.timesUp && (
            <QuestionInput
              onClick={this.btnClick.bind(this)}
              answers={answers}
            />
          )}
          {this.state.timesUp && (
            <div>
              <h3>Correct Answer</h3>
              <p>{correctAnswer}</p>
              <button
                onClick={this.nextQuestion.bind(this)}
                className="btn btn-primary"
              >
                Next Question
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
