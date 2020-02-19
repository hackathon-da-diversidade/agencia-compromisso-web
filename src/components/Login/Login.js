import React from 'react';

const getGoogleAuthUri = () =>
  fetch('/auth')
    .then(res => res.text())
    .then(uri => window.location.href = uri)

export default () => <button onClick={getGoogleAuthUri}>LOGIN</button>