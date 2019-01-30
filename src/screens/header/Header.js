import React from 'react'
import { connect } from 'react-redux'
import Emoji from '../../components/Emoji'
import formatNumber from '../../util'
import './Header.css';

const mapStateToProps = state => {
  return state.make;
};

const Header = (state) => (
  <header className="Header">
    <h1><Emoji symbol="💵" label="money"/><br/>${formatNumber(state.money)}</h1>
    <h1><Emoji symbol="🗣" label="followers"/><br/>{formatNumber(state.followers)}</h1>
    { state.level > 0 ? <h1><Emoji symbol="🏅" label="level"/><br/>{state.level}</h1> : null}
  </header>
)

export default connect(mapStateToProps)(Header)