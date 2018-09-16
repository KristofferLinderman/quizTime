# Quiz Time

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) using [Bootstrap](https://getbootstrap.com/) for some more pleasing visuals.

Below is some information about the project as well as some instructions of how to run to code.

## Table of Contents

- [Basic Information](#basic-information)
- [Game Instructions](#game-instructions)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## Basic Information

The project is developed in [React](https://reactjs.org/) using [Bootstrap](https://getbootstrap.com/) as a toolkit for to create a nicer UI. The questions for the quiz are fetched from [Open Trivia DB](https://opentdb.com/api_config.php).

## Game Instructions

The first screen of the page is where you select the dersired difficulty. You can choose between Easy, Medium and Hard. When you click start game the game will start and you will get ten questions, one after another. Each question has four options to choose from. You have a time limit of 15 seconds for each question.

### Life Lines

As a last resort you have two life lines that you can utilize when facing extra tricky questions.

#### 50/50

This life line removes two of the incorrect alternatives and leaves you with a 50/50 chance of guessing the right answer.

#### +10 s

This life line add an additional ten seconds to the current question, so that you can get that extra moment to think of the correct answer.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
