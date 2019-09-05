import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Lista from './components/Lista'
import Menu from './components/Menu'
import Cadastro from './components/Cadastro/Cadastro'
import Modelo from './components/Modelo/Modelo'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className='App'>
            <Switch>
              <Route exact path='/' component={Menu} />
              <Route exact path='/lista' component={Lista} />
              <Route exact path='/cadastro' component={Cadastro} />
              <Route path='/modelo/:id' component={Modelo} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
