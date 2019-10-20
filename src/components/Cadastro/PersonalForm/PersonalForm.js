import React, { Component } from 'react'
import { Formik, Form } from 'formik'

import TextField from '../../UI/Field/TextField';
import DateField from '../../UI/Field/DateField';
import EmailField from '../../UI/Field/EmailField';
import PhoneField from '../../UI/Field/PhoneField';
import NumberField from '../../UI/Field/NumberField';
import SelectField from '../../UI/Field/SelectField';

class PersonalForm extends Component {

  isUnderage = (person) => {
    if (!person || !person.birth) {
      return false;
    }
    var differenceFromNowInMs = Date.now() - person.birth.getTime();
    var differenceAsDate = new Date(differenceFromNowInMs);
    var age = Math.abs(differenceAsDate.getUTCFullYear() - 1970);
    return age < 18;
  }

  render() {
    return (
      <Formik
        initialValues={{...this.props.data}}
        enableReinitialize="true"
        render={() => (
          <Form>
            <TextField name="name" label="Nome" onChange={this.props.onChange}/>
            <EmailField name="email" label="Email" onChange={this.props.onChange}/>
            <PhoneField name="phoneNumber" label="Telefone da pessoa responsável" onChange={this.props.onChange}/>
            <SelectField name="gender" label="Expressão de Gênero" onChange={this.props.onChange}
              options={[
                  { value: 'não-declara', label: '(não declarada)' },
                  { value: 'feminina', label: 'Feminina' },
                  { value: 'masculina', label: 'Masculina' },
                  { value: 'não-binária', label: 'Não-binária' }
              ]}
            />
            <DateField name="birth" label="Nascimento" onChange={this.props.onChange}/>
            {this.isUnderage(this.props.data) ?
              <>
              <TextField name="guardianName" label="Nome da pessoa responsável" onChange={this.props.onChange}/>
              <DateField name="guardianBirth" label="Nascimento da pessoa responsável" onChange={this.props.onChange}/>
              <EmailField name="guardianEmail" label="Email da pessoa responsável" onChange={this.props.onChange}/>
              <PhoneField name="guardianPhoneNumber" label="Telefone da pessoa responsável" onChange={this.props.onChange}/>
              </>
              : 
              null
            }
            <TextField name="address" label="Endereço" onChange={this.props.onChange}/>
            <NumberField name="addressNumber" label="Número" onChange={this.props.onChange}/>
            <TextField name="addressComplement" label="Complemento" onChange={this.props.onChange}/>
            <TextField name="neighborhood" label="Bairro" onChange={this.props.onChange}/>
            <TextField name="zipCode" label="CEP" onChange={this.props.onChange}/>
            <TextField name="city" label="Cidade" onChange={this.props.onChange}/>
            <TextField name="country" label="País" onChange={this.props.onChange}/>
          </Form>
        )}
      />
  )};
}



export default PersonalForm;