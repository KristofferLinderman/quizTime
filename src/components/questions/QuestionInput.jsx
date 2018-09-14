import React, { Component } from "react";

class QuestionInput extends Component {
  render() {
    const answers = this.props.answers;
    console.log(this.props.answers);

    return (
      <div>
        <div className="row">
          <div className="col-sm">
            <button
              className="btn btn-primary answer-btn"
              onClick={this.props.onClick} // Call the func given from the props
              value={answers[0]}
            >
              {answers[0]}
            </button>
            <button
              className="btn btn-primary answer-btn"
              onClick={this.props.onClick}
              value={answers[1]}
            >
              {answers[1]}
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <button
              className="btn btn-primary answer-btn"
              onClick={this.props.onClick}
              value={answers[2]}
            >
              {answers[2]}
            </button>
            <button
              className="btn btn-primary answer-btn"
              onClick={this.props.onClick}
              value={answers[3]}
            >
              {answers[3]}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionInput;
