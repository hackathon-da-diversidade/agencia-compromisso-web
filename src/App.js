import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Lista from './components/Lista'
import Menu from './components/Menu'
import Cadastro from './components/Cadastro/Cadastro'
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
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
