import React, { Component } from 'react';
import { Formik, Form } from 'formik';

import CheckboxField from '../../UI/Field/CheckboxField';
import NumberField from '../../UI/Field/NumberField';
import SelectField from '../../UI/Field/SelectField';
import TextField from '../../UI/Field/TextField';

class SocialForm extends Component {
  render() {
    return (
      <Formik
        initialValues={{ ...this.props.data }}
        enableReinitialize="true"
        render={() => (
          <Form>
            <SelectField
              name="ethnicity"
              label="Etnia"
              defaultValue=""
              onChange={this.props.onChange}
              options={[
                { value: 'EAST_ASIANS', label: 'Asiático' },
                { value: 'WHITE', label: 'Branco' },
                { value: 'NATIVE', label: 'Indígena' },
                { value: 'BLACK', label: 'Negro' },
                { value: 'PARDO', label: 'Pardo' },
                { value: 'PREFER_NOT_TO_INFORM', label: '(não declarada)' },
              ]}
            />

            <CheckboxField
              type="radio"
              name="housing"
              label="Moradia"
              onChange={this.props.onChange}
              options={[
                { value: 'OWN', label: 'Própria' },
                { value: 'RENTED', label: 'Alugada' },
                { value: 'OTHER', label: 'Outros' },
              ]}
            />

            <NumberField
              name="numberOfResidents"
              label="Quantidade de moradores"
              onChange={this.props.onChange}
            />

            <TextField
              name="occupation"
              label="Ocupação"
              onChange={this.props.onChange}
            />

            <CheckboxField
              type="radio"
              name="occupationMode"
              label="Modalide da ocupação"
              onChange={this.props.onChange}
              options={[
                { value: 'FIXED', label: 'Fixa' },
                { value: 'AUTONOMOUS', label: 'Autônoma' },
              ]}
            />

            <SelectField
              name="familyIncome"
              label="Renda familiar"
              defaultValue=""
              onChange={this.props.onChange}
              options={[
                {
                  value: 'LESS_THAN_ONE_MINIMUM_WAGE',
                  label: 'Menos de 1 salário mínimo',
                },
                { value: 'ONE_MINIMUM_WAGE', label: '1 salário mínimo' },
                {
                  value: 'TWO_MINIMUM_WAGE',
                  label: '2 salários mínimos',
                },
                { value: 'THREE_MINIMUM_WAGE', label: '3 salários mínimos' },
                {
                  value: 'MORE_THAN_THREE_MINIMUM_WAGE',
                  label: 'Mais de 3 salários mínimos',
                },
              ]}
            />

            <CheckboxField
              type="radio"
              name="haveChildren"
              label="Tem filhos?"
              onChange={() => false}
              options={[
                { value: true, label: 'Sim' },
                { value: false, label: 'Não' },
              ]}
            />

            <NumberField
              name="numberOfChildren"
              label="Quantos?"
              onChange={this.props.onChange}
            />
          </Form>
        )}
      />
    );
  }
}

export default SocialForm;
