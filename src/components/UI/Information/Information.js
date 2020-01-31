import React from 'react';
import classes from './Information.module.css';

const information = props =>
  props.children ? (
    <div className={classes.Information}>
      {props.strong ? <strong>{props.label}</strong> : props.label}
      <span>{props.children}</span>
    </div>
  ) : null;

export default information;
