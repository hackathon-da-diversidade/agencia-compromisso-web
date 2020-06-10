import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonalForm from './components/PersonalForm/PersonalForm';
import MeasuresForm from './components/MeasuresForm/MeasuresForm';
import SocialForm from './components/SocialForm/SocialForm';
import PhotosForm from './components/PhotosForm/PhotosForm';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import candidateAPI from '../../api/candidateAPI';
import classes from './CandidateForm.module.css';
import { useStorage } from 'reactfire';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const CandidateForm = ({ match, history }) => {
  let id = match.params.id;

  const storage = useStorage();
  const [candidate, setCandidate] = useState({});
  const [selectedTab, setSelectedTab] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [photos, setPhotos] = useState([]);

  const handleTabChange = (event, tab) => {
    setSelectedTab(tab);
  };

  const handleError = async (error) => {
    setHasError(true);
    console.error(error);
  };

  const create = async () => {
    const { headers } = await candidateAPI.create(candidate);
    const locationArray = headers.location.split('/');

    return locationArray[locationArray.length - 1];
  };

  const update = async () => {
    const { data } = await candidateAPI.update(candidate);

    return data.id;
  };

  const uploadPhotos = async (candidateId) => {
    (photos || [])
      .filter((file) => !file.exists)
      .forEach((file) => {
        storage.ref(`photos/${candidateId}/${file.photo.name}`).put(file.photo);
      });
  };

  const getPhotos = async (candidateId) => {
    const list = await storage.ref(`photos/${candidateId}`).listAll();

    const items = list.items.map(async (item) => {
      return { photo: item, url: await item.getDownloadURL(), exists: true };
    });

    setPhotos(await Promise.all(items));
  };

  const saveCandidate = async () => {
    try {
      id = await (candidate.id ? update() : create());

      await uploadPhotos(id);

      history.push(`/candidato/${id}`, { registrationSuccessful: true });
    } catch (e) {
      await handleError(e);
    }
  };

  useEffect(() => {
    const getCandidate = async () => {
      try {
        const { data } = await candidateAPI.get(id);

        await getPhotos(id);

        setCandidate(data);
      } catch (e) {
        await handleError(e);
      }
    };

    if (id) {
      getCandidate();
    }
  }, [id]);

  return (
    <div className={classes.CandidateForm}>
      <Header />
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        className={classes.Tabs}
        TabIndicatorProps={{ className: classes.Indicator }}
      >
        <Tab label="PESSOAL" {...a11yProps(0)} />
        <Tab label="FOTOS" {...a11yProps(1)} />
        <Tab label="MEDIDAS" {...a11yProps(2)} />
        <Tab label="SOCIAL" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={selectedTab} index={0}>
        <PersonalForm
          data={candidate}
          onChange={(updatedFields) => {
            setCandidate({ ...candidate, ...updatedFields });
          }}
        />
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <PhotosForm
          photos={photos}
          onChange={(photosList) => setPhotos(photosList)}
        />
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
        <MeasuresForm
          data={candidate}
          onChange={(updatedFields) => {
            setCandidate({ ...candidate, ...updatedFields });
          }}
        />
      </TabPanel>
      <TabPanel value={selectedTab} index={3}>
        <SocialForm
          data={candidate}
          onChange={(updatedFields) => {
            setCandidate({ ...candidate, ...updatedFields });
          }}
        />
      </TabPanel>
      {hasError && (
        <Alert severity="error">
          Ocorreu um erro ao salvar os dados. Tente novamente.
        </Alert>
      )}
      <div className={classes.Actions}>
        <Button
          id="saveButton"
          className="SecundaryButton"
          onClick={saveCandidate}
        >
          Salvar
        </Button>
        <Link to="/">Cancelar</Link>
      </div>
    </div>
  );
};

export default withRouter(CandidateForm);
