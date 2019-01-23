import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';

const Footer = () => (
  <footer>
    <nav>
      <ul>
        <li><Link to='/upgrades'>upgrades</Link></li>
        <li><Link to='/make'>Make</Link></li>
        <li><Link to='/achievements'>achievements</Link></li>
      </ul>
    </nav>
  </footer>
)

export default Footer
