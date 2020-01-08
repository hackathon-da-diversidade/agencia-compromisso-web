import React, { Component } from 'react'

import './Field.module.css'

class CheckboxField extends Component {

  onChange = (event) => {
    this.props.onChange({
      [event.target.name]: event.target.checked
    });
  };

  render() {
    const options = this.props.options ? this.props.options : [];
    const { label, name, type,onClick } = this.props;
    return (
      <>
      <label htmlFor={name}>{label}</label>
      <div>
        {options.map((option) => {
          return <span>
            <input onClick={onClick} type={type} name={name} id={option.value} key={option.value} value={option.value} onChange={this.onChange}/>
            <label for={option.value}>{option.label}</label>
          </span>
        })
        }
      </div>
      </>
    )
  };
}

export default CheckboxField;