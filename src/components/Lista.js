import React, { Component } from 'react'
import Header from './Header'
import axios from '../axios'
import dayjs from 'dayjs'



class Lista extends Component {

  state = {
    models: [],
    error: false
  }

  componentDidMount() {
    // this.listaApi = new ListaApi()
    this.loadModels()
  }

  // loadModels = async() => {
  //   try {
  //     const res = await this.listaApi.listarModelos();
  //     this.setState({
  //       models: res.data
  //     })
  //   } catch {
  //     this.setState({
  //       error: true
  //     })
  //   }
  //  }

   showModelInfo(model) {
     this.props.history.push({
      pathname: `/modelo/${model.id}`
      });
   }


    calculateAge(model){
    if (!model || model.birthday== null) {
      return 0;
    } 
    return dayjs().diff(model.birthday, 'year');  
  }

  render() {
    return (
      <div className='lista'>
        <Header title="Lista"/>
        <ul className="table">
          {this.state.models.map(model => (
            <li key={model.id}> 
                <p className="model-name" onClick={() => this.showModelInfo(model)}> {model.name}</p>
          <p className="model-data"> {model.genderExpression} | {model.phoneNumber} | {this.calculateAge(model)} anos </p>
                <br></br>
            </li>
            ))}
        </ul>
      </div>
    )
  }
}

export default Lista
