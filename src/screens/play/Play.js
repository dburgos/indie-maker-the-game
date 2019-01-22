import React, { Component } from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Router from '../Router'


class Play extends Component {
  render() {
    return (
      <div className="Play">
        <Header />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default Play;
