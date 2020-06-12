import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../../components/Button/Button';
import classes from './ContactButton.module.css';

const ContactButton = ({ phoneNumber, guardianPhoneNumber }) => {
  const hasNoPhoneNumber = () => {
    return !(guardianPhoneNumber || phoneNumber);
  };
  const callPhoneNumber = () => {
    window.location = `tel:${guardianPhoneNumber || phoneNumber}`;
  };

  return (
    <div className={classes.ContactButton}>
      <Button disabled={hasNoPhoneNumber()} clicked={callPhoneNumber}>
        Contatar
      </Button>
    </div>
  );
};

ContactButton.propTypes = {
  phoneNumber: PropTypes.string,
  guardianPhoneNumber: PropTypes.string,
};

export default ContactButton;
