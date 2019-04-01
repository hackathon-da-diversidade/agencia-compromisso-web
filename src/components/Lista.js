import React, { Component } from 'react'
import Header from './Header'

class Lista extends Component {
  render() {
    return (
      <div className='lista'>
        <Header title="Lista"/>
        <table className="table">
          <tbody>
            <tr>
              <td>Ingrid</td>
            </tr>
            <tr>
              <td>Inessa</td>
            </tr>
            <tr>
              <td>Isabel</td>
            </tr>
            <tr>
              <td>Lidi</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Lista
