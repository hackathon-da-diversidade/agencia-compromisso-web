import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import { classes } from './SuccessMessage.module.css';

const SuccessMessage = ({ location }) => {
  return location.state && location.state.registrationSuccessful ? (
    <Alert severity="success" className={classes.SuccessMessage}>
      Os dados foram salvos com sucesso!
    </Alert>
  ) : null;
};

SuccessMessage.propTypes = {
  location: PropTypes.object,
};

export default SuccessMessage;
