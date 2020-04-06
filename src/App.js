import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import List from './components/List/List';
import Menu from './components/Menu/Menu';
import FitModelForm from './components/FitModelForm/FitModelForm';
import Detail from './components/Detail/Detail';
import GoogleLogin from './components/Login/GoogleLogin';
import PageNotFound from './components/PageNotFound/PageNotFound';
import requiresAuth from './utils/requiresAuth';
import isLogged from './utils/isLogged';
import './App.css';

class Auth {
  authData = { logged: false };
  constructor(authData) {
    this.authData = authData;
  }

  isLogged = () => this.authData.logged;
}

const App = () => {
  const [auth, setAuth] = useState(new Auth());
  const [loadingApp, setLoadingApp] = useState(true);

  const withRequiredAuth = requiresAuth(auth);

  useEffect(() => {
    isLogged()
      .then(logged => {
        setAuth(new Auth({ logged }));
        setLoadingApp(false);
      })
      .catch(err => console.error(err));
  }, []);

  return loadingApp ? (
    <div> Loading ... </div>
  ) : (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={withRequiredAuth(Menu)} />
            <Route exact path="/login" component={GoogleLogin} />
            <Route exact path="/menu" component={withRequiredAuth(Menu)} />
            <Route exact path="/lista" component={withRequiredAuth(List)} />
            <Route
              exact
              path="/cadastro"
              component={withRequiredAuth(FitModelForm)}
            />
            <Route path="/modelo/:id" component={withRequiredAuth(Detail)} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
