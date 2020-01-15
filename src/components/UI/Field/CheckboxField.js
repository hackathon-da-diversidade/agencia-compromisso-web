import React, { Component } from 'react';

import { Required } from './Field.module.css';
import { Wrapper, Options, Option } from './CheckboxField.module.css';

class CheckboxField extends Component {
  onChange = event => {
    this.props.onChange({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const options = this.props.options ? this.props.options : [];
    const { label, name, type, onClick, required } = this.props;
    return (
      <div className={Wrapper}>
        <label htmlFor={name} className={required ? Required : ''}>
          {label}
        </label>
        <div className={Options}>
          {options.map(option => {
            const id = `${option.value.toString()}-${name}`;
            return (
              <span key={id} className={Option}>
                <input
                  onClick={onClick}
                  type={type}
                  name={name}
                  id={id}
                  value={option.value}
                  onChange={this.onChange}
                  required={required}
                />
                <label htmlFor={id}>{option.label}</label>
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CheckboxField;
