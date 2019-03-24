import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul>
            <li><a href="#">Cadastro</a></li>
            <li><a href="#">Lista</a></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
