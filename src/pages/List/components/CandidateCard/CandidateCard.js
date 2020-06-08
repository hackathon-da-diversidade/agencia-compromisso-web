import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import EditIcon from '@material-ui/icons/Edit';

import { calculateAge } from 'utils/dateUtils';
import { GENDER } from 'utils/constants';
import classes from './CandidateCard.module.css';

const CandidateCard = ({
  id,
  name,
  genderExpression,
  birthday,
  phoneNumber,
}) => {
  return (
    <Card name="candidateCard" className={classes.Card} variant="outlined">
      <div>
        <strong id="candidateName">{name}</strong>
        <span id="candidateInfo" className={classes.CandidateInfo}>
          {GENDER[genderExpression]}
          {birthday && ` | ${calculateAge(birthday)} anos`}
          {phoneNumber && ` | ${phoneNumber}`}
        </span>
      </div>
      <div className={classes.IconsWrapper}>
        <Link to={`/cadastro/${id}`} id="link-edit">
          <EditIcon className={classes.Icon} />
        </Link>
        <Link to={`/candidato/${id}`} id="link-details">
          <ArrowForwardIcon className={classes.Icon} />
        </Link>
      </div>
    </Card>
  );
};

export default CandidateCard;
