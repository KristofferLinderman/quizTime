import React from "react";
import PropTypes from "prop-types";

const Score = props => {
  const { score } = props;
  const scoreStyle = { color: "#000e4e" };
  return (
    <div className="card mb-3" style={scoreStyle}>
      <div className="card-body">
        <h1>Score: {score}</h1>
      </div>
    </div>
  );
};

Score.propTypes = {
  score: PropTypes.number.isRequired
};

export default Score;
