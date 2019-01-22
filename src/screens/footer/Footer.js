import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';

const Footer = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/upgrades'>upgrades</Link></li>
        <li><Link to='/play'>Make</Link></li>
        <li><Link to='/achievements'>achievements</Link></li>
      </ul>
    </nav>
  </header>
)

export default Footer
