import React from 'react';

const input = (props) => {

    let inputElement = null;

    switch(props.elementType) {
        case ('input'):
            inputElement = <input 
            onChange={props.changed}
            {...props.elementConfig}
            value={props.value}/>
            break;
        case ('textArea'):
            inputElement = <textarea 
            onChange={props.changed}
            {...props.elementConfig}
            value={props.value}/>
            break;
        case ('select'):
            inputElement = (
                <select value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option 
                        key={option.value}
                        value={option.value}> 
                        {option.displayValue} </option>
                    ))}
                </select>
            )
            break;
        default:
            inputElement = <input 
            onChange={props.changed}
            {...props.elementConfig}
            value={props.value}/>
    }

    return(
        <div>
            <label> {props.label} </label>
            {inputElement}
        </div>
        );
    };

export default input;