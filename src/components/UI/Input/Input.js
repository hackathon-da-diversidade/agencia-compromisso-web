import React from 'react';

import classes from './Input.module.css';

import DatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import "react-datepicker/dist/react-datepicker.css" 

registerLocale('pt', pt);


const input = (props) => {

    let inputElement = null;

    const joinedClasses = [classes.Input, 'form-control'].join(' ');

    switch(props.elementType) {
        case ('input'):
            inputElement = <input 
            placeholder={props.label}
            className={joinedClasses}
            onChange={props.changed}
            {...props.elementConfig}
            value={props.value}/>
            break;
        case ('textArea'):
            inputElement = <textarea 
            className={joinedClasses}
            onChange={props.changed}
            {...props.elementConfig}
            value={props.value}/>
            break;
        case ('checkbox'): 
            inputElement = 
            <label className={classes.LabelForCheckbox}>
                {props.label}
                <input
                type="checkbox"
                className={classes.Checkbox}
                onChange={props.changed}
                {...props.elementConfig}
                checked={props.value} />
            </label>
            break;
        case ('select'):
            inputElement = (
                <select 
                className={joinedClasses}
                value={props.value} 
                onChange={props.changed}>
                <option key={props.value}>{props.label}</option>
                    {props.elementConfig.options.map(option => (
                        <option 
                        key={option.value}
                        value={option.value}> 
                        {option.displayValue} </option>
                    ))}
                </select>
            )
            break;
        case ('date'):
            inputElement = ( <DatePicker
                className={joinedClasses}
                selected={props.value !== '' ? props.value : null}
                onChange={props.changed}
                dateFormat="dd/MM/yyyy"
                maxDate={new Date()}
                locale="pt"
                placeholderText={props.label}
            /> )
            break;
        default:
            inputElement = <input 
            onChange={props.changed}
            {...props.elementConfig}
            value={props.value}/>
    }

    return(
        <div className="form-group">
            {inputElement}
        </div>
        );
    };

export default input;
