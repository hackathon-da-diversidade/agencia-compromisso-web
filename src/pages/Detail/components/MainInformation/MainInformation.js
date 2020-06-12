import React from 'react';
import PropTypes from 'prop-types';
import Information from '../../../../components/Information/Information';
import { calculateAge } from '../../../../utils/dateUtils';
import { GENDER_EXPRESSION } from '../../../../utils/constants';
import classes from './MainInformation.module.css';

const MainInformation = ({ candidate }) => {
  const { birthday, genderExpression, name } = candidate;

  return (
    <>
      <div className={classes.MainInformation}>
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
  candidate: PropTypes.shape({
    name: PropTypes.string,
    birthday: PropTypes.string,
    genderExpression: PropTypes.string,
  }),
};

export default MainInformation;
