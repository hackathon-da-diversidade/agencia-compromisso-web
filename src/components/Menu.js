import React, { Component } from 'react';
import icon from '../assets/icon.png';
import banner from '../assets/banner.png';
import authenticationAPI from '../api/authenticationAPI';

class Menu extends Component {
  render() {
    return (
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
            <a href="/cadastro" className="btn-label text-white">
              <div className="btn btn-secondary btn-raised">
                <p>Cadastro</p>
              </div>
            </a>
          </li>
          <li>
            <a href="/lista" className="">
              <div className="btn btn-secondary btn-raised">
                <p>Lista</p>
              </div>
            </a>
          </li>
        </ul>

        <div className="logout">
          <a onClick={authenticationAPI.logout}> Sair </a>
        </div>
      </div>
    );
  }
}

export default Menu;
