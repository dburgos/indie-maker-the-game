import React from 'react'
import Emoji from '../../components/emoji'
import './Header.css';

const Header = () => (
  <header className="Header">
    <h1><Emoji symbol="💵" label="money"/> $0</h1>
    <h1><Emoji symbol="🗣" label="followers"/> 0</h1>
    <h1><Emoji symbol="🏅" label="level"/> 1</h1>
  </header>
)

export default Header
