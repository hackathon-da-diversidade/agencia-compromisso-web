import React, { Component } from 'react';
import icon from '../assets/icon.png';
import classes from './Header.module.css';

class Header extends Component {
  render() {
    const header = this.props.title ? 
    (<h2 className="header-title">{this.props.title}</h2>) 
    : null;
    return (
      <div className={classes.Header}>
        <img className={classes.HeaderIcon} src={icon}
          alt="ícone estilizado com o perfil de uma mulher com uma fita métrica no black power"></img>
          {header}
      </div>
    );
  }
}

export default Header;
