import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icon.png';
import classes from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <Link to="/" className={classes.HeaderBack}>←</Link>
        <img className={classes.HeaderIcon} src={icon}
          alt="ícone estilizado com o perfil de uma mulher com uma fita métrica no black power"></img>
        <h2 className={classes.HeaderTitle}>{this.props.title}</h2>
      </div>
    );
  }
}

export default Header;
