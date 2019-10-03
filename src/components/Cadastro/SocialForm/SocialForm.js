import React, { Component } from 'react'
import { Formik, Form } from 'formik'

import SelectField from '../../UI/Field/SelectField';
import TextField from '../../UI/Field/TextField';
import NumberField from '../../UI/Field/NumberField';

class SocialForm extends Component {

  constructor(props) {
    super(props);
    this.state = props.data;
  }

  handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value}, 
      () => this.props.onChange(this.state)
    );
  }

  render() {
    return (
      <Formik
        initialValues={{...this.state}}
        enableReinitialize="true"
        render={() => (
          <Form>
            <TextField name="job" label="Ocupação" onChange={this.handleChange}/>
            <SelectField name="schooling" label="Escolaridade" onChange={this.handleChange}
              options={[
                  { value: 'sem-escolaridade', label: '(sem escolaridade)' },
                  { value: 'fundamental-incompleto', label: 'Ensino fundamental incompleto' },
                  { value: 'fundamental-completo', label: 'Ensino fundamental completo' },
                  { value: 'medio-incompleto', label: 'Ensino médio incompleto' },
                  { value: 'medio-completo', label: 'Ensino médio completo' },
                  { value: 'tecnico-incompleto', label: 'Ensino técnico incompleto' },
                  { value: 'tecnico-completo', label: 'Ensino técnico completo' },
                  { value: 'superior-incompleto', label: 'Ensino superior incompleto' },
                  { value: 'superior-completo', label: 'Ensino superior completo' }
            ]}/>
            <SelectField name="race" label="Raça" onChange={this.handleChange}
              options={[
                  { value: 'nao-declara', label: '(não declarada)' },
                  { value: 'asiatico', label: 'Asiático' },
                  { value: 'branco', label: 'Branco' },
                  { value: 'indigena', label: 'Indígena' },
                  { value: 'negro', label: 'Negro' },
                  { value: 'pardo', label: 'Pardo' }
            ]}/>
            <NumberField name="people" label="Número de residentes no domicílio" onChange={this.handleChange} />

          </Form>
        )}
      />
  )};
}

/**
 * 
 * 
 *     socialForm: {
      validation: {},
        valid: true
    },
      people: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          label: 'Quantas pessoas moram com você?'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      income: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          label: 'Renda Familiar'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      children: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          label: 'Número de filhos:'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      housing: {
        elementType: 'select',
        elementConfig: {
          label: 'Moradia',
          options: [
            {
              value: 'propria',
              displayValue: 'Própria'
            },
            {
              value: 'alugada',
              displayValue: 'Alugada'
            },
            {
              value: 'cedida',
              displayValue: 'Cedida'
            },
            {
              value: 'outros',
              displayValue: 'Outros'
            },
          ]
        },
        validation: {},
        valid: true
      },
      LGBTQI: {
        elementType: 'checkbox',
        elementConfig: {
          type: 'checkbox',
          label: 'LGBTQI+:'
        },
        value: false,
        valid: false,
        touched: false
      },
      comments: {
        elementType: 'input',
        elementConfig: {
          type: 'input',
          label: 'Observações:'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
    },
 */


export default SocialForm;