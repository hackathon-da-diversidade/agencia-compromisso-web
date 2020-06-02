import React, { Component } from 'react';
import icon from '../../assets/icon.png';
import banner from '../../assets/banner.png';
import { withRouter } from 'react-router-dom';

const SignIn = React.lazy(() => import('./SignIn'));

class Login extends Component {
  render() {
    return (
      <>
        <div className="menu">
          <img
            className="icon"
            src={icon}
            alt="ícone estilizado com o perfil de uma mulher com uma fita métrica no black power"
          />
          <img
            className="banner"
            src={banner}
            alt="banner da Agência Compromisso"
          />
          <ul className="agencia-btn-group">
            <li>
              <SignIn history={this.props.history} />
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default withRouter(Login);
