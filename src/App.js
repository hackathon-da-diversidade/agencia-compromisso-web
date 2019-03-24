import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Agência Compromisso</h1>
        <Menu/>
      </div>
    );
  }
}

export default App;
