import React, { Component } from "react";
import Question from "../questions/Question";

class Game extends Component {
  state = {
    currentQuestion: 0,
    questions: [
      {
        question: "Which Apollo mission was the first one to land on the Moon?",
        correctAnswer: "Apollo 11",
        answers: ["Apollo 11", "Apollo 10", "Apollo 9", "Apollo 13"]
      },
      {
        question: "Ringo Starr of The Beatles mainly played what instrument?",
        correctAnswer: "Drums",
        answers: ["Drums", "Bass", "Guitar", "Piano"]
      }
    ]
  };

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
      .then(response => response.json())
      .then(json => {
        // console.log(json.results);
        // this.setState({ questions: json.results });
        const questions = [];
        json.results.forEach(element => {
          console.log(element);
          const newQuestion = {
            question: element.question,
            answers: [...element.incorrect_answers, element.correct_answer],
            correctAnswer: element.correct_answer
          };
          questions.push(newQuestion);
        });
        // console.log(questions);
        this.setState({ questions });
        console.log(this.state);
      });
  }

  nextQuestion() {
    const newQuestion = this.state.currentQuestion + 1;
    this.setState({ currentQuestion: newQuestion });
  }

  render() {
    const { questions, currentQuestion } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ currentQuestion: 1 });
          }}
        >
          Next
        </button>
        <Question
          question={questions[currentQuestion]}
          id={currentQuestion}
          nextQuestion={this.nextQuestion.bind(this)}
        />
      </div>
    );
  }
}

export default Game;
