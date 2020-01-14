import React, { useState } from 'react';

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
      history.push(`/modelo/${id}`);
    } catch (error) {
      setHasError(true);
    }
  };

  return (
    <div className={classes.FitModelForm}>
      <Header title="Cadastro" />
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
      <Button clicked={saveFitModel}>Salvar</Button>
      {hasError && (
        <span className={classes.Error}>
          Ocorreu um erro ao salvar os dados. Tente novamente.
        </span>
      )}
    </div>
  );
}

export default FitModelForm;