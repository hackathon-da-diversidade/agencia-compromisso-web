import React from 'react'
import Input from '../../UI/Input/Input';
import { registrationType } from '../registrationType'

const dadosBasicos = (props) => {
        const personalDataFormElements = [];
        for (let key in props.data) {
        personalDataFormElements.push({
            id: key,
            config: props.data[key]
        })
        }

        let personalDataForm = (
            <form>
              {personalDataFormElements.map(formElement => (
                <Input
                  label={formElement.config.elementConfig.label}
                  key={formElement.id}
                  elementType={formElement.config.elementType}
                  elementConfig={formElement.config.elementConfig}
                  value={formElement.config.value}
                  invalid={!formElement.config.valid}
                  shouldValidate={formElement.config.validation}
                  touched={formElement.config.touched}
                  changed={
                    (event) => props.changeHandler(event, formElement.id, registrationType.PERSONAL)} />
              ))}
            </form>
          );
        return (
            personalDataForm
        );
}

export default dadosBasicos;