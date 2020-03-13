import React, { Component } from 'react';
import { Field } from 'formik';

import classes from './TextArea.module.css';

class TextArea extends Component {
  onChange = event => {
    this.props.onChange({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className={classes.TextArea}>
        <label
          htmlFor={this.props.name}
          className={this.props.required ? classes.Required : ''}
        >
          {this.props.label}
        </label>
        <textarea
          type="textarea"
          className={classes.InputTextArea}
          wrap="hard"
          value={this.props.value}
          onChange={this.props.onChange}
          required={this.props.required}
        />
      </div>
    );
  }
}

export default TextArea;
