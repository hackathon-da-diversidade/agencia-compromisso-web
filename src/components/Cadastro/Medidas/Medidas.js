import React from 'react'
import Input from '../../UI/Input/Input';
import { registrationType } from '../registrationType'

const medidas = (props) => {
        const sizeFormElements = [];
        for (let key in props.data) {
          sizeFormElements.push({
            id: key,
            config: props.data[key]
        })
        }

        let sizeForm = (
            <form>
              {sizeFormElements.map(formElement => (
                <Input
                  label={formElement.config.elementConfig.label}
                  key={formElement.id}
                  elementType={formElement.config.elementType}
                  elementConfig={formElement.config.elementConfig}
                  value={formElement.config.value}
                  invalid={!formElement.config.valid}
                  shouldValidate={formElement.config.validation}
                  touched={formElement.config.touched}
                  changed={(event) => props.changeHandler(event, formElement.id, registrationType.SIZE)} />
              ))}
            </form>
          );
        return (
            sizeForm
        );
}

export default medidas;
