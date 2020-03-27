import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import {calculateAge} from '../../utils/dateUtils';
import {GENDER} from '../../utils/constants';
import classes from './FitModelCard.module.css';

class FitModelCard extends Component {

  constructor(props) {
    super(props);
  }

  showModelInfo(modelId) {
    window.location = `/modelo/${modelId}`;
  }

  render() {
    const {id, name, genderExpression, birthday, phoneNumber} = this.props;
    return (
      <Card
        key={id}
        name="fitModelCard"
        className={classes.Card}
        variant="outlined"
        onClick={() => this.showModelInfo(id)}
      >
        <div>
          <strong id="fitModelName">{name}</strong>
          <span id="fitModelInfo" className={classes.FitModelInfo}>
                {GENDER[genderExpression]}
            {birthday && ` | ${calculateAge(birthday)} anos`}
            {phoneNumber && ` | ${phoneNumber}`}
              </span>
        </div>
        <ArrowForwardIcon className={classes.ForwardIcon}/>
      </Card>
    );
  }
}

export default FitModelCard;
