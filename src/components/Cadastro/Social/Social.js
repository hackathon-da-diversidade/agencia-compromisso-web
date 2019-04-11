import React from 'react'
import Input from '../../UI/Input/Input';

const social = (props) => {
        const socialFormElements = [];
        for (let key in props.data) {
          socialFormElements.push({
            id: key,
            config: props.data[key]
        })
        }

        let socialForm = (
            <form>
              {socialFormElements.map(formElement => (
                <Input
                  label={formElement.config.elementConfig.label}
                  key={formElement.id}
                  elementType={formElement.config.elementType}
                  elementConfig={formElement.config.elementConfig}
                  value={formElement.config.value}
                  invalid={!formElement.config.valid}
                  shouldValidate={formElement.config.validation}
                  touched={formElement.config.touched}
                  changed={(event) => props.changeHandler(event, formElement.id)} />
              ))}
            </form>
          );
        return (
            socialForm
        );
}

export default social;