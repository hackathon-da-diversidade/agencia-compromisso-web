import React, { useState, useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';
import Header from '../Header/Header';
import Button from '../UI/Button/Button';
import Information from '../UI/Information/Information';
import SocialInformation from './sections/SocialInformation';
import PersonalInformation from './sections/PersonalInformation';
import MeasuresInformation from './sections/MeasuresInformation';

import fitModelAPI from '../../api/fitModelAPI';
import classes from './Detail.module.css';
import { calculateAge } from '../../utils/dateUtils';
import { GENDER_EXPRESSION } from '../../utils/constants';

const Detail = ({ match, location }) => {
  const [model, setModel] = useState({ sizes: {}, socialInformation: {} });

  useEffect(() => {
    loadModelInfo(match.params.id);
  }, [match.params.id]);

  const loadModelInfo = async id => {
    try {
      const { data } = await fitModelAPI.get(id);
      setModel(data);
    } catch (error) {
      console.log(error);
    }
  };

  const hasNoPhoneNumber = () => {
    return !(model.guardianPhoneNumber || model.phoneNumber);
  };

  const callPhoneNumber = () => {
    window.location = `tel:${model.guardianPhoneNumber || model.phoneNumber}`;
  };

  return (
    <div>
      <Header path="/lista" />
      <div className={classes.Details}>
        {location.state && location.state.registrationSuccessful && (
          <Alert severity="success" className={classes.SucessMessage}>
            Os dados foram salvos com sucesso!
          </Alert>
        )}
        <div className={classes.MainInfos}>
          <Information label="Nome:" strong>
            {model.name}
          </Information>
          {model.birthday && (
            <Information label="Idade:" strong>
              {calculateAge(model.birthday)}
            </Information>
          )}
        </div>
        <Information label="Expressão de gênero:" strong>
          {GENDER_EXPRESSION[model.genderExpression]}
        </Information>

        <PersonalInformation data={model} />

        {model.sizes && <MeasuresInformation data={model.sizes} />}

        {model.socialInformation && (
          <SocialInformation data={model.socialInformation} />
        )}

        {model.notes && (
          <>
            <h1>OBSERVAÇÕES:</h1>
            <span>{model.notes}</span>
          </>
        )}

        <div className={classes.ContactButton}>
          <Button disabled={hasNoPhoneNumber()} clicked={callPhoneNumber}>
            Contatar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
