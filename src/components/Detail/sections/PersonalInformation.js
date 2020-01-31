import React from 'react';
import { AVAILABILITY } from '../../../utils/constants';
import Information from '../../UI/Information/Information';

const PersonalInformation = ({ data }) => (
  <>
    <h1>PESSOAL:</h1>
    <Information label="Data de nascimento:">{data.birthday}</Information>
    <Information label="Disponibilidade:">
      {AVAILABILITY[data.availability]}
    </Information>
    <Information label="Projetos:">{data.projects}</Information>
    <Information label="Telefone:">{data.phoneNumber}</Information>
    <Information label="Endereço:">{data.address}</Information>
    <Information label="Pertence à comunidade LGBTQIA+:">
      {data.identifyAsLGBTQIA ? 'Sim' : 'Não'}
    </Information>
  </>
);

export default PersonalInformation;
