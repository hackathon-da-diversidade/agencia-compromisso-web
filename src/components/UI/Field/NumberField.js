import React, { Component } from 'react';
import { Field } from 'formik';

import classes from './Field.module.css';

class NumberField extends Component {
  onChange = event => {
    this.props.onChange({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className={classes.Field + ' form-group'}>
        <label
          htmlFor={this.props.name}
          className={this.props.required ? classes.Required : ''}
        >
          {this.props.label}
        </label>
        <Field
          type="number"
          value={this.props.value || ''}
          name={this.props.name}
          onChange={this.onChange}
          className="form-control"
          min={this.props.min}
          step={this.props.step}
          required={this.props.required}
        />
      </div>
    );
  }
}

export default NumberField;
