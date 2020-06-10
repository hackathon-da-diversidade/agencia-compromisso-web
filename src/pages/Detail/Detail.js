import React, { useEffect, useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import Header from 'components/Header/Header';
import MainInformation from './components/MainInformation/MainInformation';
import SuccessMessage from './components/SuccessMessage/SuccessMessage';
import PersonalInformation from './components/PersonalInformation/PersonalInformation';
import MeasuresInformation from './components/MeasuresInformation/MeasuresInformation';
import SocialInformation from './components/SocialInformation/SocialInformation';
import Notes from './components/Notes/Notes';
import ContactButton from './components/ContactButton/ContactButton';

import candidateAPI from 'api/candidateAPI';
import classes from './Detail.module.css';
import { withRouter } from 'react-router-dom';

const useCandidate = (id) => {
  const [candidate, setCandidate] = useState({
    sizes: {},
    socialInformation: {},
  });

  useEffect(() => {
    const loadCandidateInfo = async (id) => {
      try {
        const { data } = await candidateAPI.get(id);
        setCandidate(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadCandidateInfo(id);
  }, [id]);

  return candidate;
};

const Detail = ({ match, location }) => {
  try {
    const candidate = useCandidate(match.params.id);
    return (
      <div>
        <Header path="/lista" />
        {candidate.name ? (
          <div className={classes.Details}>
            <SuccessMessage location={location} />
            <MainInformation candidate={candidate} />
            <PersonalInformation data={candidate} />
            <MeasuresInformation data={candidate.sizes} />
            <SocialInformation data={candidate.socialInformation} />
            <Notes>{candidate.notes}</Notes>
            <ContactButton
              phoneNumber={candidate.phoneNumber}
              guardianPhoneNumber={candidate.guardianPhoneNumber}
            />
          </div>
        ) : null}
      </div>
    );
  } catch (error) {
    console.log(error);
    return (
      <Alert severity="warning">Não foi possível carregar o perfil.</Alert>
    );
  }
};

export default withRouter(Detail);
