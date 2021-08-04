import React from 'react';
import PropTypes from 'prop-types';

function Notification(props) {
  const { message } = props;

  return <p>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
