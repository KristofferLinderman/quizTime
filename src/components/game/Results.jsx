import React from "react";
import PropTypes from "prop-types";

const Results = props => {
  const { correct, incorrect, unanswered } = props.score;
  const { difficulty } = props;

  const resultsStyle = { color: "#000e4e" };

  return (
    <div className="card" style={resultsStyle}>
      <div className="card-body">
        <h1 className="card-title">Final Results</h1>
        <h3>
          Selected Difficulty:
          {difficulty}
        </h3>
        <h3>Correct Questions: {correct}</h3>
        <h3>Incorrect Questions: {incorrect}</h3>
        <h3>Unanswered Questions: {unanswered}</h3>
      </div>
    </div>
  );
};

Results.propTypes = {
  score: PropTypes.object.isRequired,
  difficulty: PropTypes.string.isRequired
};

export default Results;
