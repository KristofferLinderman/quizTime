import React, { Component } from "react";
class LifeLines extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Life Lines</h1>
          <button
            value="fiftyPercent"
            className="btn btn-info btn-margin"
            onClick={onClick}
          >
            50/50
          </button>
          <button
            value="timeIncrease"
            className="btn btn-info btn-margin"
            onClick={onClick}
          >
            +10 s
          </button>
        </div>
      </div>
    );
  }
}

export default LifeLines;
