import React from 'react';
import shortId from 'shortid';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

function FeedbackOptions(props) {
  const { options, onLeaveFeedback } = props;
  const { button } = s;

  return (
    <div>
      {options.map(option => (
        <button
          type="button"
          className={button}
          key={shortId.generate()}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
