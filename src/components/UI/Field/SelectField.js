import React, { Component } from 'react'
import { Field } from 'formik'

import classes from './Field.module.css'

class SelectField extends Component {

  onChange = (event) => {
    this.props.onChange({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const options = this.props.options ? this.props.options : [];
    return (
            <div className={classes.Field + " form-group"}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <Field component="select" name={this.props.name} onChange={this.onChange} className="form-control" defaultValue={this.props.defaultValue}>
                  {options.map((option) => 
                    (<option key={option.value} {...option}>{option.label}</option>))
                  }
                </Field>
            </div>
        )
    };
}

export default SelectField;