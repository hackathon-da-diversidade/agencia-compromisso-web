import React from 'react';
import classes from './Information.module.css';

const information = (props) => (
    <div className={classes.Information}>
        <span> {props.label} </span>
        <span> {props.value} </span>
    </div>
);

export default information;
