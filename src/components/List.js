import React, { Component } from 'react';
import Header from './Header';
import fitModelAPI from '../api/fitModelAPI';

import Card from '@material-ui/core/Card';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { calculateAge } from '../utils/dateUtils';
import { GENDER } from '../utils/constants';
import classes from './List.module.css';

class List extends Component {
  state = {
    models: [],
    error: false,
  };

  componentDidMount() {
    this.loadModels();
  }

  loadModels = async () => {
    try {
      const res = await fitModelAPI.getAll();
      this.setState({
        models: res.data,
      });
    } catch {
      this.setState({
        error: true,
      });
    }
  };

  showModelInfo(model) {
    this.props.history.push({
      pathname: `/modelo/${model.id}`,
    });
  }

  render() {
    return (
      <>
        <Header title="Lista" />
        {this.state.models.map(model => (
          <Card
            key={model.id}
            name="fitModelCard"
            className={classes.Card}
            variant="outlined"
            onClick={() => this.showModelInfo(model)}
          >
            <div>
              <strong name="fitModelName">{model.name}</strong>
              <span name="fitModelInfo" className={classes.FitModelInfo}>
                {GENDER[model.genderExpression]}
                {model.birthday && ` | ${calculateAge(model.birthday)} anos`}
                {model.phoneNumber && ` | ${model.phoneNumber}`}
              </span>
            </div>
            <ArrowForwardIcon className={classes.ForwardIcon} />
          </Card>
        ))}
      </>
    );
  }
}

export default List;
