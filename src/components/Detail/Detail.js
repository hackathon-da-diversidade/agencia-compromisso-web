import React, { useEffect, useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import Header from '../Header/Header';
import MainInformation from './components/MainInformation/MainInformation';
import SuccessMessage from './components/SuccessMessage/SuccessMessage';
import PersonalInformation from './components/PersonalInformation/PersonalInformation';
import MeasuresInformation from './components/MeasuresInformation/MeasuresInformation';
import SocialInformation from './components/SocialInformation/SocialInformation';
import Notes from './components/Notes/Notes';
import ContactButton from './components/ContactButton/ContactButton';

import fitModelAPI from '../../api/fitModelAPI';
import './Detail.css';
import { withRouter } from 'react-router-dom';

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

const Detail = ({ match, location }) => {
  try {
    const model = useFitModel(match.params.id);
    return (
      <div>
        <Header path="/lista" />
        {model.name ? (
          <div className="Details">
            <SuccessMessage location={location} />
            <MainInformation model={model} />
            <PersonalInformation data={model} />
            <MeasuresInformation data={model.sizes} />
            <SocialInformation data={model.socialInformation} />
            <Notes>{model.notes}</Notes>
            <ContactButton
              phoneNumber={model.phoneNumber}
              guardianPhoneNumber={model.guardianPhoneNumber}
            />
          </div>
        ) : null}
      </div>
    );
  } catch {
    return (
      <Alert severity="warning">Não foi possível carregar o perfil.</Alert>
    );
  }
};

export default withRouter(Detail);
