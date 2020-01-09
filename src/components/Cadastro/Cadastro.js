import React, { Component } from 'react'

import PersonalForm from './PersonalForm/PersonalForm';
import MeasuresForm from './MeasuresForm/MeasuresForm';
import SocialForm from './SocialForm/SocialForm';
import Header from '../Header'
import Button from '../UI/Button/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import fitModelAPI from '../../api/fitModelAPI'

import classes from './Cadastro.module.css';

class Cadastro extends Component {

  state = {
    selectedTabIndex: 0,
    personalForm: {},
    measuresForm:{},
    socialForm:{}
  }

  constructor( props ) {
    super( props )
  }

    handleSubmit = () => {
      const {personalForm,measuresForm,socialForm} = this.state
      const model = {...personalForm, sizes: measuresForm, ...socialForm};
      console.log(model);
      this.saveModel(model);
  }

  saveModel = async (model) => {
    const { history } = this.props
    try{
      const id = await fitModelAPI.create(model)
      console.log("id:", id)
      history.push({pathname: '/'})
    }
    catch(error){
      console.log(error);
    }
  };

  handleSelectTabChange = (event, newValue) => {
    this.setState({selectedTabIndex: newValue});
  };

  onPersonalFormChange = (updatedFields) => {
    let personalForm = {...this.state.personalForm, ...updatedFields};
    this.setState({personalForm});
  };

  onMeasuresFormChange = (updatedFields) => {
    let measuresForm = {...this.state.measuresForm, ...updatedFields};
    this.setState({measuresForm});
  };

  onSocialFormChange = (updatedFields) => {
    let socialForm = {...this.state.socialForm, ...updatedFields};
    this.setState({socialForm});
  };

  renderTab = () => {
    switch (this.state.selectedTabIndex) {
      case 0:
        return (
          <PersonalForm data={this.state.personalForm} onChange={this.onPersonalFormChange} />
        )
      case 1:
        return (
          <MeasuresForm data={this.state.measuresForm} onChange={this.onMeasuresFormChange} />
        )
      case 2:
        return (
          <SocialForm data={this.state.socialForm} onChange={this.onSocialFormChange} />
        )
      default:
        return (<div></div>);
    }
  };

  render() {
    let error = null;
    if (this.state.error) {
      error = ( <span className={classes.Error}> Ocorreu um erro ao salvar os dados. Tente novamente. </span>)
    }

    return (
      <div className={classes.Cadastro}>
        <Header title="Cadastro" />
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.selectedTabIndex}
            onChange={this.handleSelectTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto">
            <Tab label="Pessoal" />
            <Tab label="Medidas" />
            <Tab label="Social" />
          </Tabs>
        </AppBar>
        {this.renderTab()}
        <Button clicked={this.handleSubmit}> Salvar </Button>
        {error}
      </div>
    )
  }
}

export default Cadastro;
