import React, { Component } from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import BuildBtn from '../../components/BuildBtn'

class Make extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Make!</h1>
        <BuildBtn />
        <Footer />
      </div>
    );
  }
}

export default Make
