import React from 'react';
import { connect } from 'react-redux'
import { marketing } from '../actions'
import Emoji from './Emoji'

const MarketingBtn = ({ dispatch }) => {
  return (
    <button id="marketing-btn" className="pink button"
      onClick={e => {
        e.preventDefault();
        dispatch(marketing())
      }}
    ><Emoji symbol="🎲" /><br/>Marketing</button>
  )
};
export default connect()(MarketingBtn);
