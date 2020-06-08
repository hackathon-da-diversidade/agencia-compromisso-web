import React, { Component } from 'react';

import classes from './TextArea.module.css';

class TextArea extends Component {
  onChange = (event) => {
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
          name={this.props.name}
          className={classes.InputTextArea}
          value={this.props.value}
          onChange={this.onChange}
          required={this.props.required}
        />
      </div>
    );
  }
}

export default TextArea;
