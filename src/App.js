import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import List from './components/List/List';
import Menu from './components/Menu/Menu';
import FitModelForm from './components/FitModelForm/FitModelForm';
import Detail from './components/Detail/Detail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import './App.css';
import firebaseConfig from './utils/firebase';
import { AuthCheck, FirebaseAppProvider } from 'reactfire';
import Login from './components/Login/Login';
import CircularProgress from '@material-ui/core/CircularProgress';

class App extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<CircularProgress/>}>
          <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <Router>
              <div className="App">
                <Switch>
                  <Route exact path="/">
                    <AuthCheck fallback={<Redirect to="/login"/>}>
                      <Menu/>
                    </AuthCheck>
                  </Route>
                  <Route exact path="/login">
                    <Login/>
                  </Route>
                  <Route exact path="/menu">
                    <AuthCheck fallback={<Redirect to="/login"/>}>
                      <Menu/>
                    </AuthCheck>
                  </Route>
                  <Route exact path="/lista">
                    <AuthCheck fallback={<Redirect to="/login"/>}>
                      <List/>
                    </AuthCheck>
                  </Route>
                  <Route exact path="/cadastro/:id?">
                    <AuthCheck fallback={<Redirect to="/login"/>}>
                      <FitModelForm/>
                    </AuthCheck>
                  </Route>
                  <Route exact path="/modelo/:id">
                    <AuthCheck fallback={<Redirect to="/login"/>}>
                      <Detail/>
                    </AuthCheck>
                  </Route>
                  <Route exact path="*">
                    <PageNotFound/>
                  </Route>
                </Switch>
              </div>
            </Router>
          </FirebaseAppProvider>
        </Suspense>
      </>
    );
  }
}

export default App;
