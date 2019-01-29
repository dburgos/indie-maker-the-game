import React, { Component } from 'react';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import MakeTip from '../../components/MakeTip'
import BuildBtn from '../../components/BuildBtn'
import MarketingBtn from '../../components/MarketingBtn'

import './Make.css';

class Make extends Component {
  render() {
    return (
      <div>
        <Header />
        <MakeTip />
        <BuildBtn />
        <MarketingBtn />
        <Footer />
      </div>
    );
  }
}

export default Make
