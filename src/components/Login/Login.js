import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import loginApi from '../../api/login';
import setLocalStorage from '../../utils/setLocalStorage';
import isLogged from '../../utils/isLogged';
const clientId = process.env.REACT_APP_GOOGLE_ID;

const Login = ({ history }) => {
  const [hasError, setHasError] = useState(false);

  const onSuccess = async data => {
    try {
      const email = data.profileObj.email;
      const response = await loginApi.get(email);
      if (data.accessToken) {
        const logged = await setLocalStorage(response.status, data.accessToken);
        logged && history.push(response.location);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onFailure = response => setHasError(true);

  return isLogged ? (
    <Redirect to="/menu" />
  ) : (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
      {hasError && <div>Ocorreu um erro ao fazer login. Tente novamente.</div>}
    </div>
  );
};

export default Login;
