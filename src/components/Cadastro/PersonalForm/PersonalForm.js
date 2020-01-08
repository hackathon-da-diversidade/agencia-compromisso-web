import React, { Component } from 'react'
import { Formik, Form } from 'formik'
import * as dayjs from 'dayjs'

import TextField from '../../UI/Field/TextField';
import PhoneField from '../../UI/Field/PhoneField';
import SelectField from '../../UI/Field/SelectField';
import MaskedField from '../../UI/Field/MaskedField';
import CheckboxField from '../../UI/Field/CheckboxField';


class PersonalForm extends Component {

  state = {
    inProjects: false
  }

  isUnderage = (person) => {
    if (!person || !person.birthday) {
      return false;
    }

    if (person && Date.parse(person.birthday)) {
      const parseDate = dayjs(person.birthday).format('DD/MM/YYYY')
      const birthday = new Date(parseDate)
      const eighteen = 31556952000 * 18
      const differenceFromNowInMs = Date.now() - birthday.getTime();
      return differenceFromNowInMs <= eighteen;
    }
  }

  checkProject = event => {
    this.setState({
      inProjects: event.target.value
    })
  }

  render() {
    const { data = {}, onChange } = this.props;
    
    return (
      <Formik
        initialValues={{ ...data }}
        enableReinitialize="true"
        render={() => (
          <Form>
            <TextField name="name" label="Nome completo *" onChange={this.props.onChange} />
            <MaskedField name="birthday" label="Data de nascimento" onChange={this.props.onChange}
              mask={[/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} />
            {this.isUnderage(this.props.data) ?
              <>
                <TextField name="guardianName" label="Nome da pessoa responsável" onChange={this.props.onChange} />
                <MaskedField name="guardianPhoneNumber" label="Telefone da pessoa responsável" onChange={this.props.onChange}
                  mask={['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]} />
              </>
              :
              null
            }
            <CheckboxField type="checkbox" name="availability" label="Disponibilidade" onChange={this.props.onChange}
              options={[
                { value: 'MORNING', label: 'Manhã' },
                { value: 'AFTERNOON', label: 'Tarde' },
                { value: 'ALLDAY', label: 'Dia todo' }
              ]}
            />
            <CheckboxField type="radio" name="inProjects" label="Participação em outros projetos?" onChange={this.props.onChange} onClick={this.checkProject}
              options={[
                { value: true, label: 'Sim' },
                { value: false, label: 'Não' }
              ]}
            />
            {data.inProjects && <TextField name="projects" label="Projetos" onChange={this.props.onChange} />}

            <PhoneField name="phoneNumber" label="Telefone" onChange={this.props.onChange}
              mask={['(', /\d/, /\d/, ')', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]} />
            <SelectField name="genderExpression" label="Expressão de Gênero" onChange={this.props.onChange}
              options={[
                { value: 'FEMALE', label: 'Feminina' },
                { value: 'MALE', label: 'Masculina' },
                { value: 'NON_BINARY', label: 'Não-binária' },
                { value: 'PREFER_NOT_TO_INFORM', label: 'Prefere não informar' }
              ]}
            />

            <TextField name="address" label="Endereço" onChange={this.props.onChange} />

          </Form>
        )}
      />
    )
  };
}



export default PersonalForm;