import React, { Component } from "react";
import Question from "../questions/Question";
import Score from "./Score";
import GameOver from "./GameOver";
import LifeLines from "./LifeLines";

class Game extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestionIndex: 0,
      questions: [
        {
          question: "",
          correctAnswer: "",
          answers: [""]
        }
      ],
      score: 0,
      gameOver: false,
      fiftyPercent: true,
      timeIncrease: true
    };

    this.child = React.createRef();
  }

  async componentDidMount() {
    const apiResponse = await fetch(
      "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"
    );
    const json = await apiResponse.json();

    console.log(json.results);
    // this.setState({ questions: json.results });

    const questions = [];
    json.results.forEach(element => {
      // let answersArray = ;
      const answersArray = this.shuffle([
        ...element.incorrect_answers,
        element.correct_answer
      ]);

      const newQuestion = {
        question: element.question,
        answers: answersArray,
        correctAnswer: element.correct_answer
      };
      questions.push(newQuestion);
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
    const nextQuestionIndex = this.state.currentQuestionIndex + 1;
    if (nextQuestionIndex === this.state.questions.length) {
      this.gameOver();
    } else this.setState({ currentQuestionIndex: nextQuestionIndex });
  }

  correctAnswer() {
    this.setState({ score: this.state.score + 1 });
  }

  gameOver() {
    this.setState({ gameOver: true });
  }

  onLifeLineClick(event) {
    event.target.disabled = true;

    const input = event.target.value;

    if (input === "fiftyPercent") {
      this.setState({ fiftyPercent: false });
      this.child.current.fiftyPercent();
    } else if (input === "timeIncrease") {
      this.setState({ timeIncrease: false });
      this.child.current.timeIncrease();
    }
  }

  render() {
    const {
      questions,
      currentQuestionIndex,
      gameOver,
      score,
      fiftyPercent,
      timeIncrease
    } = this.state;
    return (
      <div>
        {!gameOver && (
          <div>
            <Score score={this.state.score} />
            <Question
              question={questions[currentQuestionIndex]}
              id={currentQuestionIndex}
              nextQuestion={this.nextQuestion.bind(this)}
              correctAnswer={this.correctAnswer.bind(this)}
              ref={this.child}
            />
            <LifeLines onClick={this.onLifeLineClick.bind(this)} />
          </div>
        )}
        {gameOver && <GameOver score={score} />}
      </div>
    );
  }
}

export default Game;
