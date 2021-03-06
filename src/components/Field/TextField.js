import React, { Component } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

import classes from './Field.module.css';

class TextField extends Component {
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
        <Field
          type="text"
          value={this.props.value || ''}
          name={this.props.name}
          onChange={this.onChange}
          className="form-control"
          required={this.props.required}
        />
      </div>
    );
  }
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  required: PropTypes.bool,
};

export default TextField;
