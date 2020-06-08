import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { calculateAge } from '../../utils/dateUtils';
import { GENDER } from '../../utils/constants';
import classes from './FitModelCard.module.css';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

class FitModelCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  detailModel(id) {
    this.props.onDetail(id);
  }

  editModel(id) {
    this.props.onEdit(id);
  }

  deleteCandidate(id) {
    this.props.onDelete(id);
    this.handleClose();
  }

  render() {
    const { id, name, genderExpression, birthday, phoneNumber } = this.props;
    return (
      <>
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
              onClick={this.handleClickOpen}
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
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Excluir este candidato?</DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} autoFocus>
              Cancelar
            </Button>
            <Button onClick={() => this.deleteCandidate(id)}>Excluir</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default FitModelCard;
