import React from 'react';
import { AVAILABILITY } from '../../../utils/constants';
import Information from '../../UI/Information/Information';

const PersonalInformation = ({ data }) =>
  (data.birthday ||
    data.availability ||
    data.projects ||
    data.phoneNumber ||
    data.address ||
    data.identifyAsLGBTQIA == true ||
    data.identifyAsLGBTQIA == false) && (
    <>
      <h1>PESSOAL:</h1>
      <Information label="Data de nascimento:">{data.birthday}</Information>
      <Information label="Disponibilidade:">
        {AVAILABILITY[data.availability]}
      </Information>
      <Information label="Projetos:">{data.projects}</Information>
      <Information testId="phoneNumber" label="Telefone:">
        {data.phoneNumber}
      </Information>
      <Information label="Endereço:">{data.address}</Information>
      {data.identifyAsLGBTQIA == true && (
        <Information label="Pertence à comunidade LGBTQIA+:"> Sim</Information>
      )}
      {data.identifyAsLGBTQIA == false && (
        <Information label="Pertence à comunidade LGBTQIA+:">Não</Information>
      )}
    </>
  );

export default PersonalInformation;
