import React, { Component } from 'react'
import { Field } from 'formik'

import classes from './Field.module.css'

class TextField extends Component {

  handleChange = (event) => {
    this.props.onChange(event);
  }

  render() {
    return (
            <div className={classes.Field + " form-group"}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <Field type="text" name={this.props.name} onChange={this.handleChange} className="form-control" />
            </div>
        )
    };
}

export default TextField;