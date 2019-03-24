import React, { Component } from 'react'

class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <ul>
          <li>
            <a href='/cadastro' className='btn-label text-white'>
              <div className='btn btn-raised btn-primary'>Cadastro</div>
            </a>
          </li>
          <li>
            <a href='/lista' className='btn-label text-white'>
              <div className='btn btn-raised btn-primary'>Lista</div>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu
