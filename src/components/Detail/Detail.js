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
  try {
    const model = useFitModel(match.params.id);
    return (
      <div>
        <Header path="/lista" />
        <div className={classes.Details}>
          <SuccessMessage location={location} />
          <MainInfo model={model} />
          <PersonalInformation data={model} />
          <MeasuresInformation data={model.sizes} />
          <SocialInformation data={model.socialInformation} />
          <Notes notes={model.notes} />
          <ContactButton
            phoneNumber={model.phoneNumber}
            guardianPhoneNumber={model.guardianPhoneNumber}
          />
        </div>
      </div>
    );
  } catch {
    return (
      <Alert severity="warning">Não foi possível carregar o perfil.</Alert>
    );
  }
};

export default Detail;

const useFitModel = id => {
  const [model, setModel] = useState({ sizes: {}, socialInformation: {} });

  useEffect(() => {
    const loadModelInfo = async id => {
      try {
        const { data } = await fitModelAPI.get(id);
        setModel(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadModelInfo(id);
  }, [id]);

  return model;
};

const ContactButton = ({ phoneNumber }, { guardianPhoneNumber }) => {
  const hasNoPhoneNumber = () => {
    return !(guardianPhoneNumber || phoneNumber);
  };

  const callPhoneNumber = () => {
    window.location = `tel:${guardianPhoneNumber || phoneNumber}`;
  };

  return (
    <div className={classes.ContactButton}>
      <Button
        disabled={hasNoPhoneNumber()}
        className={classes.Button}
        clicked={callPhoneNumber}
      >
        Contatar
      </Button>
    </div>
  );
};

const MainInfo = ({ model }) => {
  const birthday = model.birthday;
  const genderExpression = model.genderExpression;
  const name = model.name;

  return (
    <>
      <div className={classes.MainInfos}>
        <Information testId="name" label="Nome:" strong>
          {name}
        </Information>
        {birthday && (
          <Information label="Idade:" strong>
            {calculateAge(birthday)}
          </Information>
        )}
      </div>
      <Information label="Expressão de gênero:" strong>
        {GENDER_EXPRESSION[genderExpression]}
      </Information>
    </>
  );
};

const SuccessMessage = ({ location }) => {
  return location.state && location.state.registrationSuccessful ? (
    <Alert severity="success" className={classes.SucessMessage}>
      Os dados foram salvos com sucesso!
    </Alert>
  ) : null;
};

const Notes = ({ notes }) => {
  return notes ? (
    <>
      <h1>OBSERVAÇÕES:</h1>
      <span>{notes}</span>
    </>
  ) : null;
};
