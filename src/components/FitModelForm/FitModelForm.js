import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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

const TABS = [PersonalForm, MeasuresForm, SocialForm];

class FitModelForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      selectedTabIndex: 0,
      fitModelData: {},
      hasError: false
    };
  }

 componentDidMount() {
    if (this.state.id) {
      fitModelAPI.get(this.state.id).then(response => this.setState({fitModelData: response.data}));
    }
  }

  saveFitModel = async () => {
    try {
      const {headers} = await fitModelAPI.create(this.state.fitModelData);
      const locationArray = headers.location.split('/');
      const id = locationArray[locationArray.length - 1];
      this.props.history.push(`/modelo/${id}`, {
        registrationSuccessful: true,
      });
    } catch (error) {
      this.setState({hasError: true});
    }
  };

  render() {
    const TabComponent = TABS[this.state.selectedTabIndex];

    return (
      <div className={classes.FitModelForm}>
        <Header/>
        <Tabs
          value={this.state.selectedTabIndex}
          onChange={(event, index) => this.setState({selectedTabIndex: index})}
          variant="scrollable"
          scrollButtons="auto"
          className={classes.Tabs}
          TabIndicatorProps={{className: classes.Indicator}}
        >
          <Tab label="PESSOAL"/>
          <Tab id="measuresTab" label="MEDIDAS"/>
          <Tab id="socialTab" label="SOCIAL"/>
        </Tabs>
        <TabComponent
          data={this.state.fitModelData}
          onChange={updatedFields => {
            this.setState({
              fitModelData: {
                ...this.state.fitModelData,
                ...updatedFields,
              }
            });
          }}
        />
        {this.state.hasError && (
          <Alert severity="error">
            Ocorreu um erro ao salvar os dados. Tente novamente.
          </Alert>
        )}
        <div className={classes.Actions}>
          <Button id="saveButton" clicked={this.saveFitModel}>Salvar</Button>
          <Link to="/">Cancelar</Link>
        </div>
      </div>
    );
  }
}

export default FitModelForm;
