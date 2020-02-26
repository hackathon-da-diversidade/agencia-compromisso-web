import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from './components/List';
import Menu from './components/Menu';
import FitModelForm from './components/FitModelForm/FitModelForm';
import Detail from './components/Detail/Detail';
import './App.css';
import Login from './components/Login/GoogleLogin';
import requiresAuth from './utils/requiresAuth';

const App = () => (
  <div>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/menu" component={requiresAuth(Menu)} />
          <Route exact path="/lista" component={requiresAuth(List)} />
          <Route
            exact
            path="/cadastro"
            component={requiresAuth(FitModelForm)}
          />
          <Route path="/modelo/:id" component={requiresAuth(Detail)} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
