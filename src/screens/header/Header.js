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
    <h2 style={{width:'35%'}}><Emoji symbol="💵" label="money"/><br/>${formatNumber(state.money)}</h2>
    <h2 style={{width:'35%'}}><Emoji symbol="🗣" label="followers"/><br/>{formatNumber(state.followers)}</h2>
    { state.level >= 0 ? <h2 style={{width:'24%'}}><Emoji symbol="🏅" label="level"/><br/>{state.level}</h2> : null}
  </header>
)

export default connect(mapStateToProps)(Header)
