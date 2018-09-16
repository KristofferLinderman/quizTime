import React, { Component } from "react";
import PropTypes from "prop-types";

import Timer from "./Timer";
import QuestionInput from "./QuestionInput";
import {
  CORRECT_ANSWER,
  INCORRECT_ANSWER,
  UNASWERED_ANSWER
} from "../questions/AnswerTypes";

class Question extends Component {
  constructor(props) {
    super(props);

    this.child = React.createRef();

    this.state = {
      questionOver: false,
      correctAnswer: false
    };

    this.timesUp = this.timesUp.bind(this);
    this.onClick = this.onClick.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  onClick(event) {
    const input = event.target.value;
    const correctAnswer = this.props.question.correctAnswer;

    if (input === correctAnswer) {
      event.target.classList.add("btn-success");
      this.setState({ correctAnswer: true });
      this.props.questionAnswered(this.props.id, CORRECT_ANSWER);
    } else {
      event.target.classList.add("btn-danger");
      this.setState({ correctAnswer: false });
      this.props.questionAnswered(this.props.id, INCORRECT_ANSWER);
    }
    this.questionOver();
  }

  //Called when the timer is up
  timesUp(event) {
    this.props.questionAnswered(this.props.id, UNASWERED_ANSWER);
    this.questionOver();
  }

  questionOver() {
    if (this.child.current != null) this.child.current.stopTimer();
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
    const { question, correctAnswer, answers } = this.props.question;
    const id = this.props.id + 1;

    const questionStyle = { color: "#000e4e" };

    return (
      <div className="card" style={questionStyle}>
        <Timer timesUp={this.timesUp} ref={this.child} />
        <div className="card-body">
          <h1 className="card-title">Question {id}</h1>
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: `${question}` }}
          />
          {!this.state.questionOver && (
            <QuestionInput onClick={this.onClick} answers={answers} />
          )}
          {this.state.questionOver && (
            <div>
              {this.state.correctAnswer ? (
                <h3 className="text-success">You are correct!</h3>
              ) : (
                <div>
                  <h3 className="text-danger">Wrong Answer</h3>
                  <span className="font-weight-bold">Correct Answer:</span>
                </div>
              )}

              <p dangerouslySetInnerHTML={{ __html: `${correctAnswer}` }} />
              <button onClick={this.nextQuestion} className="btn btn-primary">
                {id === 10 ? "Show Results" : "Next Question"}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  questionAnswered: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  nextQuestion: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired
};

export default Question;
