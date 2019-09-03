import React, { Component } from 'react'
import Header from './Header'
import axios from '../axios';


class Lista extends Component {

  state = {
    models: [],
    error: false
  }

  componentDidMount() {
    this.loadModels()
  }

  loadModels = () => {
    axios.get('modelo/list')
    .then(res => {
      if (res && res.data) {
        this.setState({
          models: res.data
        })
      }
    })
    .catch(err => {
      this.setState({
        error: true
      })
    })
   }

   showModelInfo(model) {
     // TODO - mostrar informações completas do modelo em outra página
      console.log(model)
   }

  
  render() {
    return (
      <div className='lista'>
        <Header title="Lista"/>
        <ul className="table">
          {this.state.models.map(model => (
            <li key={model._id.$oid}> 
                <p onClick={() => this.showModelInfo(model)}> {model.nome} </p>
            </li>
            ))}
        </ul>
      </div>
    )
  }
}

export default Lista
