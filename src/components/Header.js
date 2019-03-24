import React, { Component } from 'react';
import icon from './assets/icon.png';
import banner from './assets/banner.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={icon} alt="ícone"></img>
        <img src={banner} alt="banner"></img>
      </div>
    );
  }
}

export default Header;
