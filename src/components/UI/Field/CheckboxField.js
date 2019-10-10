import React, { Component } from 'react'
import { Field } from 'formik'

import classes from './Field.module.css'

class CheckboxField extends Component {

  onChange = (event) => {
    event.target.canonicalValue = event.target.checked;
    this.props.onChange(event);
  }

  render() {
    return (
            <div className={classes.Field + " form-group"}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <Field render={({ field }) => (
                  <input type="checkbox" name={this.props.name} onChange={this.onChange} className="form-control"
                    checked={field.value[this.props.name]} />
                )}/>
            </div>
        )
    };
}

export default CheckboxField;