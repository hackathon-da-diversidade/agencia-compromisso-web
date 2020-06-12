import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

import { calculateAge } from '../../../../utils/dateUtils';
import { GENDER } from '../../../../utils/constants';
import Button from '../../../../components/Button/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

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
      <ListItem alignItems="flex-start" id={`candidate${id}`}>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              {GENDER[genderExpression]}
              {birthday && ` | ${calculateAge(birthday)} anos`}
              {phoneNumber && ` | ${phoneNumber}`}
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={handleClickOpen}>
            <DeleteIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="edit"
            component={Link}
            to={`/cadastro/${id}`}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="forward"
            component={Link}
            to={`/candidato/${id}`}
          >
            <ArrowForwardIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider component="li" />
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
