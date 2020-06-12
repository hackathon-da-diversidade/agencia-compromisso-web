import React, { useEffect, useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import Header from '../../components/Header/Header';
import MainInformation from './components/MainInformation/MainInformation';
import SuccessMessage from './components/SuccessMessage/SuccessMessage';
import PersonalInformation from './components/PersonalInformation/PersonalInformation';
import MeasuresInformation from './components/MeasuresInformation/MeasuresInformation';
import SocialInformation from './components/SocialInformation/SocialInformation';
import Notes from './components/Notes/Notes';
import ContactButton from './components/ContactButton/ContactButton';

import candidateAPI from '../../api/candidateAPI';
import classes from './Detail.module.css';
import { withRouter } from 'react-router-dom';
import { useStorage } from 'reactfire';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

const Detail = ({ match, location }) => {
  const id = match.params.id;
  const storage = useStorage();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [candidate, setCandidate] = useState({
    sizes: {},
    socialInformation: {},
  });

  const getPhotos = async (candidateId) => {
    const list = await storage.ref(`photos/${candidateId}`).listAll();

    const items = list.items.map(async (item) => await item.getDownloadURL());

    setPhotos(await Promise.all(items));
  };

  useEffect(() => {
    const getCandidate = async (candidateId) => {
      setLoading(true);

      try {
        const { data } = await candidateAPI.get(candidateId);

        setCandidate(data);

        await getPhotos(candidateId);
      } catch (error) {
        console.log(error);
        setError(true);
      }

      setLoading(false);
    };

    getCandidate(id);
  }, [id]);

  return (
    <div>
      <Header path="/lista" />
      {loading && <CircularProgress />}
      {!loading && (
        <div className={classes.Details}>
          <SuccessMessage location={location} />
          <MainInformation candidate={candidate} />
          <PersonalInformation data={candidate} />
          <MeasuresInformation data={candidate.sizes} />
          <SocialInformation data={candidate.socialInformation} />
          <Notes>{candidate.notes}</Notes>
          {photos.length > 0 && (
            <div className={classes.ImagesWrapper}>
              <Paper elevation={2} className={classes.ImagesPaper}>
                <GridList cellHeight="auto" cols={1}>
                  {photos.map((photo) => (
                    <GridListTile key={photo} cols={1}>
                      <img src={photo} alt="Candidato" />
                    </GridListTile>
                  ))}
                </GridList>
              </Paper>
            </div>
          )}
          <ContactButton
            phoneNumber={candidate.phoneNumber}
            guardianPhoneNumber={candidate.guardianPhoneNumber}
          />
          {error && (
            <Alert severity="warning" className={classes.Alert}>
              Não foi possível carregar o perfil.
            </Alert>
          )}
        </div>
      )}
    </div>
  );
};

export default withRouter(Detail);
