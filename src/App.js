import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import List from './components/List';
import Menu from './components/Menu';
import FitModelForm from './components/FitModelForm/FitModelForm';
import Detail from './components/Detail/Detail';
import './App.css';
import Login from './components/Login/GoogleLogin';
import isLogged from './utils/isLogged';

const App = () => (
  <div>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={Login} />
          {/* {!isLogged() && <Redirect to="/login" />} */}
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/lista" component={List} />
          <Route exact path="/cadastro" component={FitModelForm} />
          <Route path="/modelo/:id" component={Detail} />
          {/* <Redirect exact from="/" to="/login" /> */}
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
