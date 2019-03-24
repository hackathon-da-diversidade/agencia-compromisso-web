import React, { Component } from 'react'

class Lista extends Component {
  render() {
    return (
      <div className='lista'>
        <h2>Lista</h2>
        <table class="table">
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
