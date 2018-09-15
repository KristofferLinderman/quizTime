import React, { Component } from "react";
import PropTypes from "prop-types";

import Timer from "./Timer";
import QuestionInput from "./QuestionInput";

class Question extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.child = React.createRef();

    this.state = {
      questionOver: false,
      correctAnswer: false
    };
  }

  onClick(event) {
    const input = event.target.value;
    const correctAnswer = this.props.question.correctAnswer;

    if (input === correctAnswer) {
      event.target.classList.add("btn-success");
      this.setState({ correctAnswer: true });
      this.props.correctAnswer();
    } else {
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

  fiftyPercent() {
    //Only run if the question is NOT over
    if (!this.state.questionOver) {
      const { correctAnswer, answers } = this.props.question;
      let nbrOfDeletes = 0;
      for (let i = 0; i < answers.length; i++) {
        if (answers[i] !== correctAnswer && nbrOfDeletes <= 2) {
          answers.splice(i, 1);
          nbrOfDeletes++;
        }
      }
    }
    //Return true if the question is NOT over, i.e if the 50/50 was activated
    return !this.state.questionOver;
  }

  timeIncrease() {
    //Only run if the question is NOT over
    if (!this.state.questionOver) this.child.current.timeIncrease();
    return !this.state.questionOver;
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
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: `${question}` }}
          />
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
                <span className="font-weight-bold">Correct Answer:</span>
                <p dangerouslySetInnerHTML={{ __html: `${correctAnswer}` }} />
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

Question.propTypes = {
  correctAnswer: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired
};

export default Question;
