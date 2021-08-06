import React from 'react';
import PropTypes from 'prop-types';
import MainStatistics from './MainStatistics';

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <div>
      <MainStatistics good={good} neutral={neutral} bad={bad} />
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
