import React from "react";
import PropTypes from "prop-types";

const QuestionInput = props => {
  const answers = props.answers;
  const onClick = props.onClick;

  return (
    <div>
      <div className="row">
        <div className="col-sm">
          <button
            className="btn btn-primary m-1"
            onClick={onClick} // Call the func given from the props
            value={answers[0]}
            dangerouslySetInnerHTML={{ __html: `${answers[0]}` }}
          />

          <button
            className="btn btn-primary m-1"
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
              className="btn btn-primary m-1"
              onClick={onClick}
              value={answers[2]}
              dangerouslySetInnerHTML={{ __html: `${answers[2]}` }}
            />
          )}
          {answers[3] !== undefined && (
            <button
              className="btn btn-primary m-1"
              onClick={onClick}
              value={answers[3]}
              dangerouslySetInnerHTML={{ __html: `${answers[3]}` }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

QuestionInput.propTypes = {
  answers: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default QuestionInput;
