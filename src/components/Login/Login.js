import React from 'react';
import icon from '../../assets/icon.png';
import banner from '../../assets/banner.png';
import googleIcon from '../../assets/googleIconSmall.png';

export default ({ loginAction }) => {
  return (
    <>
      <div className="menu">
        <img
          className="icon"
          src={icon}
          alt="ícone estilizado com o perfil de uma mulher com uma fita métrica no black power"
        ></img>
        <img
          className="banner"
          src={banner}
          alt="banner da Agência Compromisso"
        ></img>

        <ul className="agencia-btn-group">
          <li>
            <a onClick={loginAction}>
              <div className="btn btn-secondary btn-raised">
                <p>
                  <img
                    className="google-icon"
                    src={googleIcon}
                    alt="ícone do Google"
                  ></img>
                  Login
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
