import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from './components/List';
import Menu from './components/Menu';
import FitModelForm from './components/FitModelForm/FitModelForm';
import Modelo from './components/Modelo/Modelo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Menu} />
              <Route exact path="/lista" component={List} />
              <Route exact path="/cadastro" component={FitModelForm} />
              <Route path="/modelo/:id" component={Modelo} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
