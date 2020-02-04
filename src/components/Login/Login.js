import React from 'react';
import { GoogleLogin } from 'react-google-login';
const clientId = process.env.REACT_APP_GOOGLE_ID;

const onSuccess = response => {
  console.log('Success', response);
};

const onFailure = response => {
  console.log('Failure', response);
};

const Login = () => (
  <div>
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  </div>
);

export default Login;
