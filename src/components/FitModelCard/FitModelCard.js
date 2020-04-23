import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import EditIcon from '@material-ui/icons/Edit';

import {calculateAge} from '../../utils/dateUtils';
import {GENDER} from '../../utils/constants';
import classes from './FitModelCard.module.css';

class FitModelCard extends Component {
  showModelInfo(modelId) {
    window.location = `/modelo/${modelId}`;
  }

  editModel(id) {
    this.props.onEdit(id);
  }

  render() {
    const {id, name, genderExpression, birthday, phoneNumber} = this.props;
    return (
      <Card
        key={id}
        name="fitModelCard"
        className={classes.Card}
        variant="outlined"
      >
        <div>
          <strong id="fitModelName">{name}</strong>
          <span id="fitModelInfo" className={classes.FitModelInfo}>
                {GENDER[genderExpression]}
            {birthday && ` | ${calculateAge(birthday)} anos`}
            {phoneNumber && ` | ${phoneNumber}`}
              </span>
        </div>
        <div className={classes.IconsWrapper}>
          <EditIcon className={classes.Icon} onClick={() => this.editModel(id)}/>
          <ArrowForwardIcon className={classes.Icon} onClick={() => this.showModelInfo(id)}/>
        </div>
      </Card>
    );
  }
}

export default FitModelCard;
