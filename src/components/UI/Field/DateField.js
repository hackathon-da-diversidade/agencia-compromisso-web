import React, { Component } from 'react'
import { Field } from 'formik'

import classes from './Field.module.css'

class DateField extends Component {

  onChange = (event) => {
    let isValid = true;
    if (!event.target.valueAsDate) {
      // reset component when an invalid date has been set
      isValid = false;
    }
    else if (event.target.valueAsDate.getYear() <= -900) {
      // hold change events until a complete year (> 1000) has been entered
      return;
    }

    this.props.onChange({
      [event.target.name]: isValid ? event.target.valueAsDate : undefined
    });
  };

  convertToISOString = (date) => {
    if (!date) {
      return undefined;
    }
    return date.toISOString().split("T")[0];
  }

  render() {
    return (
            <div className={classes.Field + " form-group"}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <Field render={({ field }) => (
                  <input type="date" name={this.props.name} onChange={this.onChange} className="form-control"
                    value={this.convertToISOString(field.value[this.props.name])} />
                )}/>            
            </div>
        )
    };
}

export default DateField;