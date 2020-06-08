import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import PersonalForm from './components/PersonalForm/PersonalForm';
import MeasuresForm from './components/MeasuresForm/MeasuresForm';
import SocialForm from './components/SocialForm/SocialForm';

import Header from 'components/Header/Header';
import Button from 'components/Button/Button';

import candidateAPI from 'api/candidateAPI';
import classes from './CandidateForm.module.css';

const TABS = [PersonalForm, MeasuresForm, SocialForm];

class CandidateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      selectedTabIndex: 0,
      candidateData: {},
      hasError: false,
    };
  }

  componentDidMount() {
    if (this.state.id) {
      this.getCandidate();
    }
  }

  getCandidate = async () => {
    const response = await candidateAPI.get(this.state.id);
    this.setState({ candidateData: response.data });
  };

  saveCandidate = async () => {
    try {
      const id = await (this.state.id ? this.update() : this.create());

      this.props.history.push(`/candidato/${id}`, {
        registrationSuccessful: true,
      });
    } catch (error) {
      this.setState({ hasError: true });
    }
  };

  async create() {
    const { headers } = await candidateAPI.create(this.state.candidateData);
    const locationArray = headers.location.split('/');

    return locationArray[locationArray.length - 1];
  }

  async update() {
    const { data } = await candidateAPI.update(this.state.candidateData);

    return data.id;
  }

  render() {
    const TabComponent = TABS[this.state.selectedTabIndex];

    return (
      <div className={classes.CandidateForm}>
        <Header />
        <Tabs
          value={this.state.selectedTabIndex}
          onChange={(event, index) =>
            this.setState({ selectedTabIndex: index })
          }
          variant="scrollable"
          scrollButtons="auto"
          className={classes.Tabs}
          TabIndicatorProps={{ className: classes.Indicator }}
        >
          <Tab label="PESSOAL" />
          <Tab id="measuresTab" label="MEDIDAS" />
          <Tab id="socialTab" label="SOCIAL" />
        </Tabs>
        <TabComponent
          data={this.state.candidateData}
          onChange={updatedFields => {
            this.setState({
              candidateData: {
                ...this.state.candidateData,
                ...updatedFields,
              },
            });
          }}
        />
        {this.state.hasError && (
          <Alert severity="error">
            Ocorreu um erro ao salvar os dados. Tente novamente.
          </Alert>
        )}
        <div className={classes.Actions}>
          <Button id="saveButton" clicked={this.saveCandidate}>
            Salvar
          </Button>
          <Link to="/">Cancelar</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(CandidateForm);
