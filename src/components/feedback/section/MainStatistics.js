import React from 'react';
import PropTypes from 'prop-types';
import s from '../feedbackOptions/Feedback.module.css';

function MainStatistics(props) {
  const { good, neutral, bad } = props;
  const { statistics } = s;

  return (
    <>
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
    </>
  );
}

MainStatistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default MainStatistics;
