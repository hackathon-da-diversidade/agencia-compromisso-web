import React from 'react';
import PropTypes from 'prop-types';

const Notes = ({ children }) => {
  return children ? (
    <>
      <h1>OBSERVAÇÕES:</h1>
      <span>{children}</span>
    </>
  ) : null;
};

Notes.propTypes = {
  children: PropTypes.string,
};

export default Notes;
