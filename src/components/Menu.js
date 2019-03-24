import React, { Component } from 'react'
import Header from './Header'

class Menu extends Component {
  render() {
    return (
      <div className='menu'>
        <Header />
        <ul className='agencia-btn-group'>
          <li>
            <a href='/cadastro' className='btn-label text-white'>
              <div className='btn btn-secondary btn-raised'>
                <p>Cadastro</p>
              </div>
            </a>
          </li>
          <li>
            <a href='/lista' className=''>
              <div className='btn btn-secondary btn-raised'>
                <p>Lista</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu
