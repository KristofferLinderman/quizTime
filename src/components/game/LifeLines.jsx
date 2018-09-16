import React from "react";
import PropTypes from "prop-types";

const LifeLines = props => {
  const { onClick } = props;
  const lifeLifeStyle = { color: "#000e4e" };
  return (
    <div className="card mt-3" style={lifeLifeStyle}>
      <div className="card-body">
        <h1 className="card-title">Life Lines</h1>
        <button
          value="fiftyPercent"
          className="btn btn-info m-1"
          onClick={onClick}
        >
          50/50
        </button>
        <button
          value="timeIncrease"
          className="btn btn-info m-1"
          onClick={onClick}
        >
          +10 s
        </button>
      </div>
    </div>
  );
};

LifeLines.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default LifeLines;
