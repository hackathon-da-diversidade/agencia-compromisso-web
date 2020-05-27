import React from 'react';
import PropTypes from 'prop-types';
import Information from '../../../UI/Information/Information';
import { calculateAge } from '../../../../utils/dateUtils';
import { GENDER_EXPRESSION } from '../../../../utils/constants';
import './MainInformation.css';

const MainInformation = ({ model }) => {
  const { birthday, genderExpression, name } = model;

  return (
    <>
      <div className="MainInformation">
        <Information testId="name" label="Nome:" strong>
          {name}
        </Information>
        {birthday && (
          <Information label="Idade:" strong>
            {calculateAge(birthday).toString()}
          </Information>
        )}
      </div>
      <Information label="Expressão de gênero:" strong>
        {GENDER_EXPRESSION[genderExpression]}
      </Information>
    </>
  );
};

MainInformation.propTypes = {
  model: PropTypes.shape({
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string,
    genderExpression: PropTypes.string,
  }),
};

export default MainInformation;
