import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import * as dayjs from 'dayjs'

import TextField from '../../UI/Field/TextField';
import PhoneField from '../../UI/Field/PhoneField';
import SelectField from '../../UI/Field/SelectField';
import MaskedField from '../../UI/Field/MaskedField';


class PersonalForm extends Component {

  isUnderage = (person) => {
    if (!person || !person.birthday) {
      return false;
    } 
    
    if(person && Date.parse(person.birthday)){
      const parseDate = dayjs(person.birthday).format('DD/MM/YYYY')
      const birthday = new Date(parseDate)
      const eighteen = 31556952000 * 18
      const differenceFromNowInMs = Date.now() - birthday.getTime();
      return differenceFromNowInMs <= eighteen;
    }
  }

  render() {
    return (
      <Formik
        initialValues={{ ...this.props.data }}
        enableReinitialize="true"
        render={() => (
          <Form>
            <TextField name="name" label="Nome completo *" onChange={this.props.onChange} />
            <MaskedField name="birthday" label="Data de nascimento" onChange={this.props.onChange}
              mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]} />

            <PhoneField name="phoneNumber" label="Telefone" onChange={this.props.onChange} />
            <SelectField name="genderExpression" label="Expressão de Gênero" onChange={this.props.onChange}
              options={[
                { value: 'PREFER_NOT_TO_INFORM', label: 'Prefere não informar' },
                { value: 'FEMALE', label: 'Feminina' },
                { value: 'MALE', label: 'Masculina' },
                { value: 'NON_BINARY', label: 'Não-binária' }
              ]}
            />
            
           
            <TextField name="address" label="Endereço" onChange={this.props.onChange} />
            <TextField name="projects" label="Projetos" onChange={this.props.onChange} />
            {this.isUnderage(this.props.data) ?
              <>
              <TextField name="guardianName" label="Nome da pessoa responsável" onChange={this.props.onChange} />
              <PhoneField name="guardianPhoneNumber" label="Telefone da pessoa responsável" onChange={this.props.onChange} />
            </>
            :
            null
          }
          </Form>
        )}
      />
    )
  };
}



export default PersonalForm;