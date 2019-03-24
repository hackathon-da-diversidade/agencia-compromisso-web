import React, { Component } from 'react';
import icon from '../assets/icon.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="header-icon" src={icon}
          alt="ícone estilizado com o perfil de uma mulher com uma fita métrica no black power"></img>
        <h2 className="header-title">{this.props.title}</h2>
      </div>
    );
  }
}

export default Header;
