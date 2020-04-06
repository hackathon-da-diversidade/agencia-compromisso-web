import React, { Component } from 'react';
import Header from '../Header/Header';

class PageNotFound extends Component {
  render() {
    return (
      <>
        <Header />
        <h1>Ops!</h1>
        <span>Página não encontrada.</span>
      </>
    );
  }
}

export default PageNotFound;
