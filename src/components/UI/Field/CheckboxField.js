import React, { Component } from 'react';

import './Field.module.css';

class CheckboxField extends Component {
  onChange = event => {
    this.props.onChange({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const options = this.props.options ? this.props.options : [];
    const { label, name, type, onClick } = this.props;
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <div>
          {options.map(option => {
            const id = `${option.value.toString()}-${name}`;
            return (
              <span key={id}>
                <input
                  onClick={onClick}
                  type={type}
                  name={name}
                  id={id}
                  value={option.value}
                  onChange={this.onChange}
                />
                <label htmlFor={id}>{option.label}</label>
              </span>
            );
          })}
        </div>
      </>
    );
  }
}

export default CheckboxField;
