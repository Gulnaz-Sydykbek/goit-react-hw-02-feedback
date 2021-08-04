import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  const { statistics } = s;

  return (
    <div>
      <p>
        Good:
        <span className={statistics} style={{ backgroundColor: '#00ff00' }}>
          {good}
        </span>
      </p>
      <p>
        Neutral:
        <span className={statistics} style={{ backgroundColor: '#ffff00' }}>
          {neutral}
        </span>
      </p>
      <p>
        Bad:
        <span className={statistics} style={{ backgroundColor: '#dc143c' }}>
          {bad}
        </span>
      </p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
