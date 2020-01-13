import React, { useState } from 'react';
import { Formik, Form } from 'formik';

import CheckboxField from '../../UI/Field/CheckboxField';
import NumberField from '../../UI/Field/NumberField';
import SelectField from '../../UI/Field/SelectField';
import TextField from '../../UI/Field/TextField';

function SocialForm({ data = {}, onChange }) {
  const [hasChildren, setHasChildren] = useState(false);

  const handleHasChildren = ({ hasChildren }) => {
    setHasChildren(hasChildren);

    if (hasChildren === 'false') {
      onChange({ numberOfChildren: null });
    }
  };

  const onChangeSocialInformation = socialInformation => {
    return onChange({
      socialInformation: { ...data.socialInformation, ...socialInformation },
    });
  };

  return (
    <Formik
      initialValues={{ ...data }}
      enableReinitialize="true"
      render={() => (
        <Form>
          <SelectField
            name="ethnicity"
            label="Etnia"
            defaultValue=""
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
          />

          <TextField
            name="occupation"
            label="Ocupação"
            onChange={onChangeSocialInformation}
          />

          <CheckboxField
            type="radio"
            name="occupationMode"
            label="Modalide da ocupação"
            onChange={onChangeSocialInformation}
            options={[
              { value: 'FIXED', label: 'Fixa' },
              { value: 'AUTONOMOUS', label: 'Autônoma' },
            ]}
          />

          <SelectField
            name="familyIncome"
            label="Renda familiar"
            defaultValue=""
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

          <CheckboxField
            type="radio"
            name="hasChildren"
            label="Tem filhos?"
            onChange={handleHasChildren}
            options={[
              { value: true, label: 'Sim' },
              { value: false, label: 'Não' },
            ]}
          />

          {hasChildren === 'true' && (
            <NumberField
              name="numberOfChildren"
              label="Quantos?"
              onChange={onChangeSocialInformation}
            />
          )}
        </Form>
      )}
    />
  );
}

export default SocialForm;
