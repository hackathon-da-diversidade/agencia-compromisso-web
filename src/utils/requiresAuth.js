import React from 'react';
import { Redirect } from 'react-router-dom';

export default authentication => Component => props => {
  if (authentication.isLogged()) {
    return <Component {...props} />;
  }

  return <Redirect to="/login" />;
};