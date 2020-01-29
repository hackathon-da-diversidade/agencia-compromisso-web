import React, { useState, useEffect } from 'react';
import Alert from '@material-ui/lab/Alert';
import fitModelAPI from '../../api/fitModelAPI';
import Information from '../UI/Information/Information';

import Header from '../Header';
import classes from './Detail.module.css';
import Button from '../UI/Button/Button';
import { calculateAge } from '../../utils/dateUtils';
import { AVAILABILITY, GENDER_EXPRESSION } from '../../utils/constants';

const Detail = ({ match, location }) => {
  const [model, setModel] = useState({ sizes: {} });
  const [error, setError] = useState(false);

  useEffect(() => {
    loadModelInfo(match.params.id);
  }, [match.params.id]);

  const loadModelInfo = async id => {
    try {
      const { data } = await fitModelAPI.get(id);
      setModel(data);
    } catch (error) {
      setError(true);
    }
  };

  const callPhoneNumber = () => {
    window.location = `tel:${model.phoneNumber}`;
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
          <Information label="Idade:" strong>
            {calculateAge(model.birthday)}
          </Information>
        </div>
        <Information label="Expressão de gênero:" strong>
          {GENDER_EXPRESSION[model.genderExpression]}
        </Information>
        <h1>MEDIDAS:</h1>
        <Information label="Circunferência total do busto (cm):">
          {model.sizes.totalBustCircumference}
        </Information>
        <Information label="Circunferência total da cintura alta(cm):">
          {model.sizes.totalWaistCircumference}
        </Information>
        <Information label="Circunferência total do quadril (cm):">
          {model.sizes.totalBustCircumference}
        </Information>
        <Information label="Altura (cm):">
          {model.sizes.totalBustCircumference}
        </Information>
        <h1>PESSOAL:</h1>
        <Information label="Data de Nascimento:">{model.birthday}</Information>
        <Information label="Disponibilidade:">
          {AVAILABILITY[model.availability]}
        </Information>
        <Information label="Projetos:">{model.projects}</Information>
        <Information label="Telefone:">{model.phoneNumber}</Information>
        <h1>SOCIAL:</h1>
        <Button clicked={callPhoneNumber}>Contatar</Button>
      </div>
    </div>
  );
};

export default Detail;
