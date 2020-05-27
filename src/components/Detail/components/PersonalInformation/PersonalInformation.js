import React from 'react';
import { AVAILABILITY } from '../../../../utils/constants';
import Information from '../../../UI/Information/Information';

const PersonalInformation = ({ data }) =>
  (data.birthday ||
    data.availability ||
    data.projects ||
    data.phoneNumber ||
    data.address ||
    data.identifyAsLGBTQIA === true ||
    data.identifyAsLGBTQIA === false) && (
    <>
      <h1>PESSOAL:</h1>
      <Information id="birthday" label="Data de nascimento:">
        {data.birthday}
      </Information>
      <Information id="availability" label="Disponibilidade:">
        {AVAILABILITY[data.availability]}
      </Information>
      <Information id="projects" label="Projetos:">
        {data.projects}
      </Information>
      <Information id="phoneNumber" label="Telefone:">
        {data.phoneNumber}
      </Information>
      <Information id="address" label="Endereço:">
        {data.address}
      </Information>
      <Information
        id="identifyAsLGBTQIA"
        label="Pertence à comunidade LGBTQIA+:"
      >
        {data.identifyAsLGBTQIA === true ? 'Sim' : 'Não'}
      </Information>
    </>
  );

export default PersonalInformation;
