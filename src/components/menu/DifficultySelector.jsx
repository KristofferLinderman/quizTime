import React from "react";
import PropTypes from "prop-types";

const DifficultySelector = props => {
  const { onClick } = props;
  return (
    <div>
      <h3>Select question difficulty</h3>
      <div className="row mx-auto">
        <button
          className="col btn btn-success m-1"
          /**
           * Arrow function to avoid calling function on render.
           * This can in theory be a performance issue as it creates a new function each time
           * the component renders.
           * But this renders but once a game so should be good.
           * */
          onClick={() => onClick("easy")}
        >
          Easy
        </button>
        <button
          className="col btn btn-warning m-1"
          onClick={() => onClick("medium")}
        >
          Medium
        </button>
        <button
          className="col btn btn-danger m-1"
          onClick={() => onClick("hard")}
        >
          Hard
        </button>
      </div>
    </div>
  );
};

DifficultySelector.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default DifficultySelector;
