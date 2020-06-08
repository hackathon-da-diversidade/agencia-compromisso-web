import React from 'react';
import { Form, Formik } from 'formik';
import { isInvalid, isUnderage } from '../../../utils/dateUtils';

import TextField from '../../UI/Field/TextField';
import SelectField from '../../UI/Field/SelectField';
import MaskedField from '../../UI/Field/MaskedField';
import CheckboxField from '../../UI/Field/CheckboxField';
import TextArea from '../../UI/Field/TextArea';

function PersonalForm({ data = {}, onChange }) {
  const handleInProjects = ({ inProjects }) => {
    onChange({
      projects: inProjects === 'yes' ? data.projects : null,
      inProjects,
    });
  };

  return (
    <Formik initialValues={{ ...data }} enableReinitialize="true">
      {() => (
        <Form>
          <TextField
            name="name"
            label="Nome completo"
            value={data.name}
            onChange={onChange}
            required
          />
          <MaskedField
            name="birthday"
            label="Data de nascimento"
            value={data.birthday}
            onChange={onChange}
            mask={DATE_MASK}
          />
          {renderGuardianFields(data, onChange)}
          <CheckboxField
            type="radio"
            name="availability"
            label="Disponibilidade"
            value={data.availability}
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
            value={data.inProjects ? data.inProjects : 'no'}
            options={[
              { value: 'yes', label: 'Sim' },
              { value: 'no', label: 'Não' },
            ]}
          />
          {data.inProjects === 'yes' && (
            <TextField
              name="projects"
              label="Projetos"
              onChange={onChange}
              value={data.projects}
            />
          )}
          <MaskedField
            name="phoneNumber"
            label="Telefone"
            type="tel"
            onChange={onChange}
            value={data.phoneNumber}
            mask={PHONE_NUMBER_MASK}
          />
          <TextField
            name="address"
            label="Endereço"
            onChange={onChange}
            value={data.address}
          />
          <SelectField
            name="genderExpression"
            label="Expressão de Gênero"
            onChange={onChange}
            value={data.genderExpression}
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
            name="identifyAsLGBTQIA"
            label="Pertence à comunidade LGBTQIA+"
            onChange={onChange}
            value={data.identifyAsLGBTQIA ? data.identifyAsLGBTQIA : 'false'}
            options={[
              { value: 'true', label: 'Sim' },
              { value: 'false', label: 'Não' },
            ]}
          />
          <SelectField
            name="education"
            label="Escolaridade"
            onChange={onChange}
            value={data.education}
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

          <TextArea
            name="notes"
            label="Observações"
            value={data.notes ? data.notes : ''}
            onChange={onChange}
          />
        </Form>
      )}
    </Formik>
  );
}

export default PersonalForm;

const DATE_MASK = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

const PHONE_NUMBER_MASK = [
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
];

const renderGuardianFields = (data, onChange) => {
  if (isInvalid(data.birthday)) return;

  if (isUnderage(data.birthday)) {
    return (
      <>
        <TextField
          name="guardianName"
          label="Nome da pessoa responsável"
          onChange={onChange}
          value={data.guardianName}
        />
        <MaskedField
          name="guardianPhoneNumber"
          label="Telefone da pessoa responsável"
          type="tel"
          onChange={onChange}
          value={data.guardianPhoneNumber}
          mask={PHONE_NUMBER_MASK}
        />
      </>
    );
  } else if (data.guardianName || data.guardianPhoneNumber) {
    onChange({ guardianName: null, guardianPhoneNumber: null });
    return;
  }
};
