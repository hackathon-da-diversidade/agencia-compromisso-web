import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from './components/List';
import Menu from './components/Menu';
import FitModelForm from './components/FitModelForm/FitModelForm';
import Detail from './components/Detail/Detail';
import './App.css';

const App = () => (
  <div>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/lista" component={List} />
          <Route exact path="/cadastro" component={FitModelForm} />
          <Route path="/modelo/:id" component={Detail} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
