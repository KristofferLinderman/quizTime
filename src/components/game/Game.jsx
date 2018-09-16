import React, { Component } from "react";
import PropTypes from "prop-types";

import Question from "../questions/Question";
import Score from "./Score";
import Results from "./Results";
import LifeLines from "./LifeLines";
import {
  CORRECT_ANSWER,
  INCORRECT_ANSWER,
  UNASWERED_ANSWER
} from "../questions/AnswerTypes";

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
      score: { correct: 0, incorrect: 0, unanswered: 0 },
      gameOver: false,
      fiftyPercent: true,
      timeIncrease: true
    };

    this.child = React.createRef();

    this.nextQuestion = this.nextQuestion.bind(this);
    this.onLifeLineClick = this.onLifeLineClick.bind(this);
    this.questionAnswered = this.questionAnswered.bind(this);
  }

  async componentDidMount() {
    const difficulty = this.props.difficulty;

    const apiResponse = await fetch(
      `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`
    );
    const json = await apiResponse.json();

    const questions = json.results.map(element => {
      const answersArray = this.shuffle([
        ...element.incorrect_answers,
        element.correct_answer
      ]);

      return {
        question: element.question,
        answers: answersArray,
        correctAnswer: element.correct_answer
      };
    });
    this.setState({ questions });
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

  //Future implementation is to take the ID and then be able to show what question you missed
  questionAnswered(id, answerType) {
    let newScore = this.state.score;
    switch (answerType) {
      case CORRECT_ANSWER:
        newScore.correct = this.state.score.correct + 1;
        break;
      case INCORRECT_ANSWER:
        newScore.incorrect = this.state.score.incorrect + 1;
        break;
      case UNASWERED_ANSWER:
        newScore.unanswered = this.state.score.unanswered + 1;
        break;
      default:
        break;
    }
    this.setState({ score: newScore });
  }

  gameOver() {
    this.setState({ gameOver: true });
  }

  onLifeLineClick(event) {
    const input = event.target.value;

    if (input === "fiftyPercent" && this.child.current.fiftyPercent()) {
      event.target.disabled = true;
      this.setState({ fiftyPercent: false });
    } else if (input === "timeIncrease" && this.child.current.timeIncrease()) {
      event.target.disabled = true;
      this.setState({ timeIncrease: false });
    }
  }

  render() {
    const { questions, currentQuestionIndex, gameOver, score } = this.state;
    const { difficulty } = this.props;
    return (
      <div>
        {!gameOver && (
          <div>
            <Score score={this.state.score.correct} />
            <Question
              question={questions[currentQuestionIndex]}
              id={currentQuestionIndex}
              nextQuestion={this.nextQuestion}
              questionAnswered={this.questionAnswered}
              ref={this.child}
            />
            <LifeLines onClick={this.onLifeLineClick} />
          </div>
        )}
        {gameOver && <Results score={score} difficulty={difficulty} />}
      </div>
    );
  }
}

Game.propTypes = {
  difficulty: PropTypes.string.isRequired
};

export default Game;
