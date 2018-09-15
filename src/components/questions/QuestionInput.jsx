import React, { Component } from "react";

class QuestionInput extends Component {
  render() {
    const answers = this.props.answers;
    const onClick = this.props.onClick;

    return (
      <div>
        <div className="row">
          <div className="col-sm">
            <button
              className="btn btn-primary btn-margin"
              onClick={onClick} // Call the func given from the props
              value={answers[0]}
              dangerouslySetInnerHTML={{ __html: `${answers[0]}` }}
            />

            <button
              className="btn btn-primary btn-margin"
              onClick={onClick}
              value={answers[1]}
              dangerouslySetInnerHTML={{ __html: `${answers[1]}` }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            {answers[2] !== undefined && (
              <button
                className="btn btn-primary btn-margin"
                onClick={onClick}
                value={answers[2]}
                dangerouslySetInnerHTML={{ __html: `${answers[2]}` }}
              />
            )}
            {answers[3] !== undefined && (
              <button
                className="btn btn-primary btn-margin"
                onClick={onClick}
                value={answers[3]}
                dangerouslySetInnerHTML={{ __html: `${answers[3]}` }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionInput;
