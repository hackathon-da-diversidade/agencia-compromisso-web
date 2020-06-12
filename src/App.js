import React, { Component, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { AuthCheck, FirebaseAppProvider } from 'reactfire';
import List from './pages/List/List';
import Home from './pages/Home/Home';
import CandidateForm from './pages/CandidateForm/CandidateForm';
import Detail from './pages/Detail/Detail';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Login from './pages/Login/Login';
import firebaseConfig from './utils/firebase';
import './App.css';
import {
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
  CircularProgress,
} from '@material-ui/core';
import yellow from '@material-ui/core/colors/yellow';

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: yellow,
      secondary: yellow,
    },
    typography: {
      fontFamily: ['Montserrat', 'Roboto', 'Arial', 'sans-serif'].join(','),
    },
  })
);

class App extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Suspense fallback={<CircularProgress />}>
            <FirebaseAppProvider firebaseConfig={firebaseConfig}>
              <Router>
                <div className="App">
                  <Switch>
                    <Route exact path="/">
                      <AuthCheck fallback={<Redirect to="/login" />}>
                        <Home />
                      </AuthCheck>
                    </Route>
                    <Route exact path="/login">
                      <Login />
                    </Route>
                    <Route exact path="/lista">
                      <AuthCheck fallback={<Redirect to="/login" />}>
                        <List />
                      </AuthCheck>
                    </Route>
                    <Route exact path="/cadastro/:id?">
                      <AuthCheck fallback={<Redirect to="/login" />}>
                        <CandidateForm />
                      </AuthCheck>
                    </Route>
                    <Route exact path="/candidato/:id">
                      <AuthCheck fallback={<Redirect to="/login" />}>
                        <Detail />
                      </AuthCheck>
                    </Route>
                    <Route exact path="*">
                      <PageNotFound />
                    </Route>
                  </Switch>
                </div>
              </Router>
            </FirebaseAppProvider>
          </Suspense>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
