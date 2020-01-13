import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';

import TextField from '../../UI/Field/TextField';
import SelectField from '../../UI/Field/SelectField';
import MaskedField from '../../UI/Field/MaskedField';
import CheckboxField from '../../UI/Field/CheckboxField';

dayjs.extend(customParseFormat);

function PersonalForm({ data = {}, onChange }) {
  const [inProjects, setInProjects] = useState(false);

  const isUnderage = birthday => {
    const parseDate = dayjs(birthday, 'DD-MM-YYYY');
    return dayjs().diff(parseDate, 'year') < 18;
  };

  const renderGuardianFields = () => {
    if (!dayjs(data.birthday, 'DD-MM-YYYY').isValid()) return;

    if (isUnderage(data.birthday)) {
      return (
        <>
          <TextField
            name="guardianName"
            label="Nome da pessoa responsável"
            onChange={onChange}
          />
          <MaskedField
            name="guardianPhoneNumber"
            label="Telefone da pessoa responsável"
            type="tel"
            onChange={onChange}
            mask={[
              '(',
              /\d/,
              /\d/,
              ')',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
          />
        </>
      );
    } else if (data.guardianName || data.guardianPhoneNumber) {
      onChange({ guardianName: '', guardianPhoneNumber: '' });
      return;
    }
  };

  const handleInProjects = ({ inProjects }) => {
    setInProjects(inProjects);

    if (inProjects === 'false') {
      onChange({ projects: '' });
    }
  };

  return (
    <Formik
      initialValues={{ ...data }}
      enableReinitialize="true"
      render={() => (
        <Form>
          <TextField name="name" label="Nome completo *" onChange={onChange} />
          <MaskedField
            name="birthday"
            label="Data de nascimento"
            onChange={onChange}
            mask={[/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          />
          {renderGuardianFields()}
          <CheckboxField
            type="checkbox"
            name="availability"
            label="Disponibilidade"
            onChange={onChange}
            options={[
              { value: 'MORNING', label: 'Manhã' },
              { value: 'AFTERNOON', label: 'Tarde' },
              { value: 'ALLDAY', label: 'Dia todo' },
            ]}
          />
          <CheckboxField
            type="radio"
            name="inProjects"
            label="Participação em outros projetos?"
            onChange={handleInProjects}
            options={[
              { value: true, label: 'Sim' },
              { value: false, label: 'Não' },
            ]}
          />
          {inProjects === 'true' && (
            <TextField name="projects" label="Projetos" onChange={onChange} />
          )}

          <MaskedField
            name="phoneNumber"
            label="Telefone"
            type="tel"
            onChange={onChange}
            mask={[
              '(',
              /\d/,
              /\d/,
              ')',
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
            ]}
          />
          <TextField name="address" label="Endereço" onChange={onChange} />

          <SelectField
            name="genderExpression"
            label="Expressão de Gênero"
            onChange={onChange}
            defaultValue=""
            options={[
              { value: '', hidden: true, label: '' },
              { value: 'FEMALE', label: 'Feminina' },
              { value: 'MALE', label: 'Masculina' },
              { value: 'NON_BINARY', label: 'Não-binária' },
              {
                value: 'PREFER_NOT_TO_INFORM',
                label: 'Prefere não informar',
              },
            ]}
          />

          <CheckboxField
            type="radio"
            name="lgbtqia"
            label="Pertence à comunidade LGBTQIA+"
            onChange={onChange}
            options={[
              { value: true, label: 'Sim' },
              { value: false, label: 'Não' },
            ]}
          />

          <SelectField
            name="education"
            label="Escolaridade"
            onChange={onChange}
            options={[
              { value: '', hidden: true, label: '' },
              { value: 'NO_EDUCATION', label: '(sem escolaridade)' },
              {
                value: 'INCOMPLETE_MIDDLE_SCHOOL',
                label: 'Ensino fundamental incompleto',
              },
              {
                value: 'MIDDLE_SCHOOL',
                label: 'Ensino fundamental completo',
              },
              {
                value: 'INCOMPLETE_HIGH_SCHOOL',
                label: 'Ensino médio incompleto',
              },
              { value: 'HIGH_SCHOOL', label: 'Ensino médio completo' },
              {
                value: 'INCOMPLETE_TECHNICAL_SCHOOL',
                label: 'Ensino técnico incompleto',
              },
              { value: 'TECHNICAL_SCHOOL', label: 'Ensino técnico completo' },
              {
                value: 'INCOMPLETE_HIGHER_EDUCATION',
                label: 'Ensino superior incompleto',
              },
              {
                value: 'HIGHER_EDUCATION',
                label: 'Ensino superior completo',
              },
            ]}
          />
        </Form>
      )}
    />
  );
}

export default PersonalForm;
