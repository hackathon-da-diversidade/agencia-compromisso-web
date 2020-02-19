import React from 'react';
import Login from './Login';

// Aqui ta a função de verdade, que chama auth
const getGoogleAuthUri = () =>
  fetch('/auth')
    .then(res => res.text())
    .then(uri => (window.location.href = uri));

// Aqui é pra continuar funcionando da mesma maneira
export default () => <Login loginAction={getGoogleAuthUri} />;
