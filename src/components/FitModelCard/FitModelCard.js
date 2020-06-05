import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import {calculateAge} from '../../utils/dateUtils';
import {GENDER} from '../../utils/constants';
import classes from './FitModelCard.module.css';

class FitModelCard extends Component {
  detailModel(id) {
    this.props.onDetail(id);
  }

  editModel(id) {
    this.props.onEdit(id);
  }

  deleteCandidate(id) {
    this.props.onDelete(id);
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
        <div id={id}>
          <strong id="fitModelName">{name}</strong>
          <span id="fitModelInfo" className={classes.FitModelInfo}>
            {GENDER[genderExpression]}
            {birthday && ` | ${calculateAge(birthday)} anos`}
            {phoneNumber && ` | ${phoneNumber}`}
          </span>
        </div>
        <div className={classes.IconsWrapper}>
          <DeleteIcon
            className={classes.Icon}
            onClick={() => this.deleteCandidate(id)}
          />
          <EditIcon
            className={classes.Icon}
            onClick={() => this.editModel(id)}
          />
          <ArrowForwardIcon
            className={classes.Icon}
            onClick={() => this.detailModel(id)}
          />
        </div>
      </Card>
    );
  }
}

export default FitModelCard;
