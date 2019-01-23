import React from 'react'
import { connect } from 'react-redux'
import Emoji from '../../components/Emoji'
import './Header.css';

const mapStateToProps = state => {
  return state.make;
};

const Header = (state) => (
  <header className="Header">
    <h1><Emoji symbol="💵" label="money"/> ${state.money}</h1>
    <h1><Emoji symbol="🗣" label="followers"/> {state.builds}</h1>
    <h1><Emoji symbol="🏅" label="level"/> 1</h1>
  </header>
)

export default connect(mapStateToProps)(Header)
