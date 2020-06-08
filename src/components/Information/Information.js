import React from 'react';
import PropTypes from 'prop-types';

import classes from './Information.module.css';

const Information = props =>
  props.children ? (
    <div className={classes.Information}>
      {props.strong ? <strong>{props.label}</strong> : props.label}
      <span>{props.children}</span>
    </div>
  ) : null;

Information.propTypes = {
  label: PropTypes.string.isRequired,
  strong: PropTypes.bool,
  children: PropTypes.string,
};

export default Information;
