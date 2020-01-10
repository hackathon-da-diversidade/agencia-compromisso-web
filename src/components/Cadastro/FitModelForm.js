import React, { Component, useState } from 'react';

import PersonalForm from './PersonalForm/PersonalForm';
import MeasuresForm from './MeasuresForm/MeasuresForm';
import SocialForm from './SocialForm/SocialForm';
import Header from '../Header';
import Button from '../UI/Button/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import fitModelAPI from '../../api/fitModelAPI';

import classes from './FitModelForm.module.css';

const TABS = [PersonalForm, MeasuresForm, SocialForm];

export default ({ history }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [fitModelData, setFitModelData] = useState({});
  const [hasError, setHasError] = useState(false);

  const TabComponent = TABS[selectedTabIndex];

  const saveFitModel = async () => {
    try {
      const id = await fitModelAPI.create(fitModelData);
      history.push('/');
    } catch (error) {
      setHasError(true);
    }
  };

  return (
    <div className={classes.FitModelForm}>
      <Header title="Cadastro" />
      <AppBar position="static" color="default">
        <Tabs
          value={selectedTabIndex}
          onChange={(event, index) => {
            setSelectedTabIndex(index);
          }}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Pessoal" />
          <Tab label="Medidas" />
          <Tab label="Social" />
        </Tabs>
      </AppBar>
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
};
