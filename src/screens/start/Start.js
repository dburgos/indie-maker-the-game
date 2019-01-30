import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Emoji from '../../components/Emoji'
import './Start.css';

class Start extends Component {
  render() {
    return (
      <div className="Start">
        <h1><Emoji symbol="👨‍💻"/></h1>
        <h1>Indie Maker</h1>
        <h5>The Game</h5>
        <Link to={`${process.env.PUBLIC_URL}/make`} className="PlayBtn">Play</Link>
      </div>
    );
  }
}

export default Start;
