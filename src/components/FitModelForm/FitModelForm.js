import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

import PersonalForm from './PersonalForm/PersonalForm';
import MeasuresForm from './MeasuresForm/MeasuresForm';
import SocialForm from './SocialForm/SocialForm';
import Header from '../Header';
import Button from '../UI/Button/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import fitModelAPI from '../../api/fitModelAPI';

import classes from './FitModelForm.module.css';

const TABS = [PersonalForm, MeasuresForm, SocialForm];

function FitModelForm({ history }) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [fitModelData, setFitModelData] = useState({});
  const [hasError, setHasError] = useState(false);

  const TabComponent = TABS[selectedTabIndex];

  const saveFitModel = async () => {
    try {
      const { headers } = await fitModelAPI.create(fitModelData);
      const locationArray = headers.location.split('/');
      const id = locationArray[locationArray.length - 1];
      history.push(`/modelo/${id}`, {
        registrationSuccessful: true,
      });
    } catch (error) {
      setHasError(true);
    }
  };

  return (
    <div className={classes.FitModelForm}>
      <Header />
      <Tabs
        value={selectedTabIndex}
        onChange={(event, index) => {
          setSelectedTabIndex(index);
        }}
        variant="scrollable"
        scrollButtons="auto"
        className={classes.Tabs}
        TabIndicatorProps={{ className: classes.Indicator }}
      >
        <Tab label="PESSOAL" />
        <Tab label="MEDIDAS" />
        <Tab label="SOCIAL" />
      </Tabs>
      <TabComponent
        data={fitModelData}
        onChange={updatedFields => {
          setFitModelData({
            ...fitModelData,
            ...updatedFields,
          });
        }}
      />
      {hasError && (
        <Alert severity="error">
          Ocorreu um erro ao salvar os dados. Tente novamente.
        </Alert>
      )}
      <div className={classes.Actions}>
        <Button clicked={saveFitModel}>Salvar</Button>
        <Link to="/" className={classes.HeaderBack}>
          Cancelar
        </Link>
      </div>
    </div>
  );
}

export default FitModelForm;
