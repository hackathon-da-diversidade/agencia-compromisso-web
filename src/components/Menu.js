import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <ul>
          <li>
            <a href='/cadastro'>Cadastro</a>
          </li>
          <li>
            <a href='/lista'>Lista</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu
