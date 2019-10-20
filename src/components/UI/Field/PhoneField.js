import React, { Component } from 'react'
import { Field } from 'formik'

import classes from './Field.module.css'

class PhoneField extends Component {

  onChange = (event) => {
    this.props.onChange({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
            <div className={classes.Field + " form-group"}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <Field type="tel" name={this.props.name} onChange={this.onChange} className="form-control" />
            </div>
        )
    };
}

export default PhoneField;