import React, { Component } from 'react';
import Header from './Header';
import fitModelAPI from '../api/fitModelAPI';

import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';

import Card from '@material-ui/core/Card';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import classes from './Lista.module.css';

dayjs.extend(customParseFormat);

class Lista extends Component {
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

  calculateAge(model) {
    if (!model || model.birthday == null) {
      return 0;
    }
    console.log(model.birthday);
    console.log(dayjs(model.birthday, 'DD-MM-YYYY'));
    return dayjs().diff(dayjs(model.birthday, 'DD-MM-YYYY'), 'year');
  }

  render() {
    return (
      <>
        <Header title="Lista" />
        {this.state.models.map(model => (
          <Card
            key={model.id}
            className={classes.Card}
            variant="outlined"
            onClick={() => this.showModelInfo(model)}
          >
            <div>
              <strong>{model.name}</strong>
              <span className={classes.FitModelInfo}>
                {model.genderExpression} | {this.calculateAge(model)} anos |
                {model.phoneNumber}
              </span>
            </div>
            <ArrowForwardIcon className={classes.ForwardIcon} />
          </Card>
        ))}
      </>
    );
  }
}

export default Lista;
