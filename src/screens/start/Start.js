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
        <h2>The Game</h2>
        <Link to='/make' className="PlayBtn">Play</Link>
      </div>
    );
  }
}

export default Start;
