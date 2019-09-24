import React, { Component } from 'react';
import icon from '../assets/icon.png';
import classes from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <a href='/' className={classes.HeaderBack}>←</a>
        <img className={classes.HeaderIcon} src={icon}
          alt="ícone estilizado com o perfil de uma mulher com uma fita métrica no black power"></img>
        <h2 className={classes.HeaderTitle}>{this.props.title}</h2>
      </div>
    );
  }
}

export default Header;
