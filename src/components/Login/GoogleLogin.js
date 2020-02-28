import React from 'react';
import Login from './Login';

const getGoogleAuthUri = () =>
  fetch('/auth')
    .then(res => res.text())
    .then(uri => (window.location.href = uri));

export default () => {
  return <Login loginAction={getGoogleAuthUri} />;
};
