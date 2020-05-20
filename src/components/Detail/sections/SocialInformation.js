import React from 'react';
import Information from '../../UI/Information/Information';

import {
  ETHNICITY,
  HOUSING,
  OCCUPATION_MODE,
  FAMILY_INCOME,
} from '../../../utils/constants';

const SocialInformation = ({ data }) =>
  data ? (
    <>
      <h1>SOCIAL:</h1>

      <Information id="ethnicity" label="Etnia:">
        {ETHNICITY[data.ethnicity]}
      </Information>
      <Information id="housing" label="Moradia:">
        {HOUSING[data.housing]}
      </Information>
      <Information id="numberOfResidents" label="Quantidade de moradores:">
        {data.numberOfResidents}
      </Information>
      <Information id="occupation" label="Ocupação:">
        {data.occupation}
      </Information>
      <Information id="occupationMode" label="Modalidade da ocupação:">
        {OCCUPATION_MODE[data.occupationMode]}
      </Information>
      <Information id="familyIncome" label="Renda familiar:">
        {FAMILY_INCOME[data.familyIncome]}
      </Information>
      <Information id="numberOfChildren" label="Filhos:">
        {data.numberOfChildren}
      </Information>
    </>
  ) : null;

export default SocialInformation;
