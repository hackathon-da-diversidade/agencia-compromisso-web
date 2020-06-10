import React from 'react';
import { withRouter } from 'react-router-dom';
import { useAuth } from 'reactfire';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Logo from 'components/Logo/Logo';
import Menu from 'components/Menu/Menu';
import AuthorizeAPI from 'api/authorizeAPI';
import googleIcon from 'assets/googleIconSmall.png';

const Login = ({ history }) => {
  const auth = useAuth();

  const signIn = async () => {
    const userCredential = await auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );

    const status = await AuthorizeAPI.get(userCredential.user.email);

    if (status === 200) {
      return history.push('/');
    }

    await auth.signOut();
  };

  return (
    <>
      <Logo />
      <Menu
        menuOptions={[
          {
            text: 'Login',
            onClick: signIn,
            icon: <img src={googleIcon} alt="ícone do Google"></img>,
          },
        ]}
      />
    </>
  );
};

export default withRouter(Login);
