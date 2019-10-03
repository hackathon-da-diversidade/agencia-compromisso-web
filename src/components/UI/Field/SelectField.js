import React, { Component } from 'react'
import { Field } from 'formik'

import classes from './Field.module.css'

class SelectField extends Component {

  handleChange = (event) => {
    this.props.onChange(event);
  }

  render() {
    const options = this.props.options ? this.props.options : [];
    return (
            <div className={classes.Field + " form-group"}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <Field component="select" name={this.props.name} onChange={this.handleChange} className="form-control">
                  {options.map((option) => 
                    (<option key={option.value} value={option.value}>{option.label}</option>))
                  }
                </Field>
            </div>
        )
    };
}

export default SelectField;