import { useAuth } from 'reactfire';
import React from 'react';
import * as firebase from 'firebase';
import AuthorizeAPI from '../../api/authorizeAPI';
import googleIcon from '../../assets/googleIconSmall.png';

const SignIn = ({ history }) => {
  const auth = useAuth();

  const signIn = async () => {
    const userCredential = await auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider(),
    );

    const status = await AuthorizeAPI.get(userCredential.user.email);

    if (status === 200) {
      return history.push('/menu');
    }

    await auth.signOut();
  };

  return (
    <button onClick={signIn} className="btn btn-secondary btn-raised">
      <img className="google-icon" src={googleIcon} alt="ícone do Google"/>
      Login
    </button>
  );
};

export default SignIn;
