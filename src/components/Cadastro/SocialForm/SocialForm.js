import React, { Component } from 'react'
import { Formik, Form } from 'formik'

import CheckboxField from '../../UI/Field/CheckboxField';
import NumberField from '../../UI/Field/NumberField';
import SelectField from '../../UI/Field/SelectField';
import TextField from '../../UI/Field/TextField';

class SocialForm extends Component {

  render() {
    return (
      <Formik
        initialValues={{...this.props.data}}
        enableReinitialize="true"
        render={() => (
          <Form>
            <TextField name="job" label="Ocupação" onChange={this.props.onChange}/>
            <SelectField name="schooling" label="Escolaridade" onChange={this.props.onChange}
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
              ]}
            />
            <SelectField name="race" label="Raça" onChange={this.props.onChange}
              options={[
                  { value: 'nao-declara', label: '(não declarada)' },
                  { value: 'asiatico', label: 'Asiático' },
                  { value: 'branco', label: 'Branco' },
                  { value: 'indigena', label: 'Indígena' },
                  { value: 'negro', label: 'Negro' },
                  { value: 'pardo', label: 'Pardo' }
              ]}
            />
            <CheckboxField type="radio" name="lgbtqia" label="Pertence à comunidade LGBTQIA+" onChange={this.props.onChange} 
            options={[
              { value: true, label: 'Sim' },
              { value: false, label: 'Não' }
            ]}/>
            <NumberField name="income" label="Renda mensal" onChange={this.props.onChange} min="0.00" step="0.01" />
            <NumberField name="people" label="Número de residentes no domicílio" onChange={this.props.onChange} />
            <NumberField name="children" label="Número de filhos e/ou dependentes" onChange={this.props.onChange} />
            <SelectField name="housing" label="Moradia" onChange={this.props.onChange}
              options={[
                  { value: 'nao-declara', label: '(não declarada)' },
                  { value: 'propria', label: 'Própria' },
                  { value: 'alugada', label: 'Alugada' },
                  { value: 'cedida', label: 'Cedida' },
                  { value: 'outros', label: 'Outros' }
              ]}
            />
            <TextField name="comments" label="Comentários adicionais" onChange={this.props.onChange} />
          </Form>
        )}
      />
  )};
}

export default SocialForm;