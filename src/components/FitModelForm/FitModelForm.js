import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import PersonalForm from './PersonalForm/PersonalForm';
import MeasuresForm from './MeasuresForm/MeasuresForm';
import SocialForm from './SocialForm/SocialForm';
import Header from '../Header/Header';
import Button from '../UI/Button/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import fitModelAPI from '../../api/fitModelAPI';
import classes from './FitModelForm.module.css';
import PhotosForm from './PhotosForm/PhotosForm';

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

const FitModelForm = ({ match, history }) => {
  let id = match.params.id;

  const [candidate, setCandidate] = useState({});
  const [selectedTab, setSelectedTab] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleTabChange = (event, tab) => {
    setSelectedTab(tab);
  };

  const handleError = async (error) => {
    setHasError(true);
    console.error(error);
  };

  const create = async () => {
    const { headers } = await fitModelAPI.create(candidate);
    const locationArray = headers.location.split('/');

    return locationArray[locationArray.length - 1];
  };

  const update = async () => {
    const { data } = await fitModelAPI.update(candidate);

    return data.id;
  };

  const saveCandidate = async () => {
    try {
      id = await (candidate.id ? update() : create());

      history.push(`/modelo/${id}`, { registrationSuccessful: true });
    } catch (e) {
      await handleError(e);
    }
  };

  useEffect(() => {
    const getCandidate = async () => {
      try {
        const { data } = await fitModelAPI.get(id);

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
    <div className={classes.FitModelForm}>
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
          data={candidate}
          onChange={(updatedFields) => {
            setCandidate({ ...candidate, ...updatedFields });
          }}
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
        <Button id="saveButton" clicked={saveCandidate}>
          Salvar
        </Button>
        <Link to="/">Cancelar</Link>
      </div>
    </div>
  );
};

export default withRouter(FitModelForm);
