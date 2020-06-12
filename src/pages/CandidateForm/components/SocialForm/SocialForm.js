import React from 'react';
import { Form, Formik } from 'formik';

import CheckboxField from '../../../../components/Field/CheckboxField';
import NumberField from '../../../../components/Field/NumberField';
import SelectField from '../../../../components/Field/SelectField';
import TextField from '../../../../components/Field/TextField';
import ChildrenInformationField from './components/ChildrenInformationField';

function SocialForm({ data = {}, onChange }) {
  const socialInformation = data.socialInformation || {};

  const onChangeSocialInformation = (newSocialInformation) => {
    return onChange({
      socialInformation: { ...socialInformation, ...newSocialInformation },
    });
  };

  return (
    <Formik initialValues={{ ...socialInformation }} enableReinitialize="true">
      {() => (
        <Form>
          <SelectField
            name="ethnicity"
            label="Etnia"
            value={socialInformation.ethnicity}
            onChange={onChangeSocialInformation}
            options={[
              { value: '', hidden: true, label: '' },
              { value: 'EAST_ASIANS', label: 'Amarela' },
              { value: 'WHITE', label: 'Branca' },
              { value: 'NATIVE', label: 'Indígena' },
              { value: 'BLACK', label: 'Preta' },
              { value: 'PARDO', label: 'Parda' },
              { value: 'PREFER_NOT_TO_INFORM', label: '(não declarada)' },
            ]}
          />

          <CheckboxField
            type="radio"
            name="housing"
            label="Moradia"
            onChange={onChangeSocialInformation}
            value={socialInformation.housing}
            options={[
              { value: 'OWN', label: 'Própria' },
              { value: 'RENTED', label: 'Alugada' },
              { value: 'OTHER', label: 'Outros' },
            ]}
          />

          <NumberField
            name="numberOfResidents"
            label="Quantidade de moradores"
            onChange={onChangeSocialInformation}
            value={socialInformation.numberOfResidents}
          />

          <TextField
            name="occupation"
            label="Ocupação"
            onChange={onChangeSocialInformation}
            value={socialInformation.occupation}
          />

          <CheckboxField
            type="radio"
            name="occupationMode"
            label="Modalidade da ocupação"
            onChange={onChangeSocialInformation}
            value={socialInformation.occupationMode}
            options={[
              { value: 'FIXED', label: 'Fixa' },
              { value: 'AUTONOMOUS', label: 'Autônoma' },
            ]}
          />

          <SelectField
            name="familyIncome"
            label="Renda familiar"
            value={socialInformation.familyIncome}
            onChange={onChangeSocialInformation}
            options={[
              { value: '', hidden: true, label: '' },
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

          <ChildrenInformationField
            socialInformation={socialInformation}
            onChangeSocialInformation={onChangeSocialInformation}
          />
        </Form>
      )}
    </Formik>
  );
}

export default SocialForm;
