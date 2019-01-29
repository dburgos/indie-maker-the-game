import React from 'react'
import { Link } from 'react-router-dom'
import Emoji from '../../components/Emoji'
import './Footer.css';

const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li><Link to='/upgrades'><Emoji symbol="💸" label="money"/><br/>Upgrades</Link></li>
        <li><Link to='/make'><Emoji symbol="👨‍💻" label="money"/><br/>Make</Link></li>
        <li><Link to='/achievements'><Emoji symbol="🏆" label="money"/><br/>Achievements</Link></li>
      </ul>
    </nav>
  </footer>
)

export default Footer
