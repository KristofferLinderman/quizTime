import React, { Component } from "react";
import Timer from "./Timer";
import QuestionInput from "./QuestionInput";

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();

    this.state = {
      questionOver: false,
      correctAnswer: false
    };
  }

  onClick(event) {
    const input = event.target.value;
    const correctAnswer = this.props.question.correctAnswer;

    console.log("Input: " + input + " Corr: " + correctAnswer);

    if (input === correctAnswer) {
      console.log("Correct!");
      event.target.classList.add("btn-success");
      /**
       * Call game to let it know that correct was selected
       * Stop the timer
       *
       */
      this.setState({ correctAnswer: true });
    } else {
      console.log("Wrong!");
      event.target.classList.add("btn-danger");
      this.setState({ correctAnswer: false });
    }
    this.questionOver();
  }

  //Called when the timer is up
  timesUp(event) {
    this.questionOver();
  }

  questionOver() {
    this.child.current.stopTimer();
    this.setState({ questionOver: true });
  }

  nextQuestion() {
    this.setState({ questionOver: false, correctAnswer: false });
    this.props.nextQuestion();
    this.child.current.restartTimer();
  }

  render() {
    // console.log(this.props.question);

    const { question, correctAnswer, answers } = this.props.question;
    const id = this.props.id + 1;
    return (
      <div className="card">
        <Timer timesUp={this.timesUp.bind(this)} ref={this.child} />
        <div className="card-body">
          <h1 className="card-title">Question {id}</h1>
          <p className="card-text">{question}</p>
          {!this.state.questionOver && (
            <QuestionInput
              onClick={this.onClick.bind(this)}
              answers={answers}
            />
          )}
          {this.state.questionOver &&
            !this.state.correctAnswer && (
              <div>
                <h3 className="text-danger">Wrong Answer</h3>
                <p>
                  <span className="font-weight-bold">Correct Answer:</span>
                  {correctAnswer}
                </p>
                <button
                  onClick={this.nextQuestion.bind(this)}
                  className="btn btn-primary"
                >
                  Next Question
                </button>
              </div>
            )}
          {this.state.questionOver &&
            this.state.correctAnswer && (
              <div>
                <h3 className="text-success">You are correct!</h3>
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
