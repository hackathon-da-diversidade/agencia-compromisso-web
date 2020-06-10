import React, { Component } from 'react';
import { Field } from 'formik';
import InfoIcon from '@material-ui/icons/Info';

import classes from './Field.module.css';

class NumberField extends Component {
  onChange = (event) => {
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
        {this.props.infoAction && (
          <InfoIcon
            className={classes.InfoIcon}
            onClick={this.props.infoAction}
          />
        )}
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
