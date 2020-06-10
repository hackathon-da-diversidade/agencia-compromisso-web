import React from 'react';
import Information from 'components/Information/Information';

import {
  ETHNICITY,
  HOUSING,
  OCCUPATION_MODE,
  FAMILY_INCOME,
} from '../../../../utils/constants';

const SocialInformation = ({ data }) =>
  data ? (
    <>
      <h1>SOCIAL:</h1>

      <Information label="Etnia:">{ETHNICITY[data.ethnicity]}</Information>
      <Information label="Moradia:">{HOUSING[data.housing]}</Information>
      <Information label="Quantidade de moradores:">
        {data.numberOfResidents}
      </Information>
      <Information label="Ocupação:">{data.occupation}</Information>
      <Information label="Modalidade da ocupação:">
        {OCCUPATION_MODE[data.occupationMode]}
      </Information>
      <Information label="Renda familiar:">
        {FAMILY_INCOME[data.familyIncome]}
      </Information>
      <Information label="Filhos:">{data.numberOfChildren}</Information>
    </>
  ) : null;

export default SocialInformation;
