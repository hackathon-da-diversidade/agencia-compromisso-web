import React, { useEffect, useState } from 'react';
import Login from './Login';
import isLogged from '../../utils/isLogged';
import { Redirect } from 'react-router-dom';

const getGoogleAuthUri = () =>
  fetch('/auth')
    .then(res => res.text())
    .then(uri => (window.location.href = uri));

export default () => {
  // const [redirectToMenu, setRedirectToMenu] = useState(false);

  // useEffect(() => {
  //   isLogged().then(logged => setRedirectToMenu(logged));
  // }, []);

  return <Login loginAction={getGoogleAuthUri} />;
  // redirectToMenu ? (
  //   <Redirect to="/menu" />
  // ) : (
  // );
};
