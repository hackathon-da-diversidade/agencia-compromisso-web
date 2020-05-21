import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import './SuccessMessage.css';

const SuccessMessage = ({ location }) => {
  return location.state && location.state.registrationSuccessful ? (
    <Alert severity="success" className="SuccessMessage">
      Os dados foram salvos com sucesso!
    </Alert>
  ) : null;
};

SuccessMessage.propTypes = {
  location: PropTypes.object,
};

export default SuccessMessage;
