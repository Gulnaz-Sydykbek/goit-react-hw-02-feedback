import React from 'react';
import PropTypes from 'prop-types';

function Section(props) {
  const { title, children } = props;

  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

Section.propTyprs = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
