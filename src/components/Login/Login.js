import React, { Component } from 'react';
import icon from '../../assets/icon.png';
import banner from '../../assets/banner.png';
import googleIcon from '../../assets/googleIconSmall.png';
import * as firebase from 'firebase';
import { useAuth } from 'reactfire';
import AuthorizeAPI from '../../api/authorizeAPI';
import { withRouter } from 'react-router-dom';

function Button({ history }) {
  const auth = useAuth();

  const signIn = async () => {
    const userCredential = await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

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
}

class Login extends Component {
  render() {
    return (
      <>
        <div className="menu">
          <img
            className="icon" src={icon}
            alt="ícone estilizado com o perfil de uma mulher com uma fita métrica no black power"
          />
          <img className="banner" src={banner} alt="banner da Agência Compromisso"/>
          <ul className="agencia-btn-group">
            <li>
              <Button history={this.props.history}/>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default withRouter(Login);
