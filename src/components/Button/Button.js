import React from 'react';
import Button from '@material-ui/core/Button';
import './Button.css';

const button = props => (
  <Button
    className={props.className}
    variant={props.variant}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);

export default button;
