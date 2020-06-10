import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

import { calculateAge } from 'utils/dateUtils';
import { GENDER } from 'utils/constants';
import Button from 'components/Button/Button';
import classes from './CandidateCard.module.css';

const CandidateCard = ({
  id,
  name,
  genderExpression,
  birthday,
  phoneNumber,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const deleteCandidate = (id) => {
    props.onDelete(id);
    handleClose();
  };

  return (
    <>
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
          <DeleteIcon onClick={handleClickOpen} className={classes.Icon} />
          <Link to={`/cadastro/${id}`} id="link-edit">
            <EditIcon className={classes.Icon} />
          </Link>
          <Link to={`/candidato/${id}`} id="link-details">
            <ArrowForwardIcon className={classes.Icon} />
          </Link>
        </div>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Excluir este candidato?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Cancelar
          </Button>
          <Button onClick={() => deleteCandidate(id)}>Excluir</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CandidateCard;
