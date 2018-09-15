import React, { Component } from "react";
import Question from "../questions/Question";

class Game extends Component {
  state = {
    currentQuestion: 0,
    questions: [
      {
        question: "",
        correctAnswer: "",
        answers: [""]
      }
    ]
  };

  async componentDidMount() {
    const apiResponse = await fetch(
      "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"
    );
    const json = await apiResponse.json();

    // console.log(json.results);
    // this.setState({ questions: json.results });

    const questions = [];
    json.results.forEach(element => {
      let answersArray = [...element.incorrect_answers, element.correct_answer];
      answersArray = this.shuffle(answersArray);

      const newQuestion = {
        question: element.question,
        answers: answersArray,
        correctAnswer: element.correct_answer
      };
      questions.push(newQuestion);
      console.log(newQuestion.answers);
    });
    this.setState({ questions });
    console.log(this.state);
  }

  /**
   *Shuffles the content of the array using Fisher-Yates
   * @param {Array} array containing the data to shuffle
   */
  shuffle(inputArray) {
    for (let i = inputArray.length - 1; i > 0; i--) {
      //Get index that can range from 0 to the index of current item
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const tempItem = inputArray[randomIndex];

      //Swap places
      inputArray[randomIndex] = inputArray[i];
      inputArray[i] = tempItem;
    }
    return inputArray;
  }

  nextQuestion() {
    const newQuestion = this.state.currentQuestion + 1;
    this.setState({ currentQuestion: newQuestion });
  }

  render() {
    const { questions, currentQuestion } = this.state;
    return (
      <div>
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
