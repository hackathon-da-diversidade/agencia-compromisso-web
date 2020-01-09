import React, { Component } from 'react'
import { Field } from 'formik'

import MaskedInput from 'react-text-mask'

import classes from './Field.module.css'

class MaskedField extends Component {

  onChange = (event) => {
    this.props.onChange({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
            <div className={classes.Field + " form-group"}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <Field render={({ field }) => (
                    <MaskedInput
                      mask={this.props.mask}
                      type={this.props.type}
                      guide={true}
                      keepCharPositions={false}
                      name={this.props.name}
                      onChange={this.onChange}
                      value={field.value[this.props.name]}
                      className="form-control"
                    />
                )}/>            
            </div>
        )
    };
}

export default MaskedField;