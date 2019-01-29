import React from 'react'
import { NavLink } from 'react-router-dom'
import Emoji from '../../components/Emoji'
import './Footer.css';

const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li><NavLink to='/upgrades' activeClassName="active"><Emoji symbol="💸" label="money"/><br/>Upgrades</NavLink></li>
        <li><NavLink to='/make' activeClassName="active"><Emoji symbol="👨‍💻" label="money"/><br/>Make</NavLink></li>
        <li><NavLink to='/achievements' activeClassName="active"><Emoji symbol="🏆" label="money"/><br/>Achievements</NavLink></li>
      </ul>
    </nav>
  </footer>
)

export default Footer
