import React from 'react';
import { connect } from 'react-redux'
import { build } from '../actions'
import Emoji from './Emoji'

const BuildBtn = ({ dispatch }) => {
  return (
    <button id="build-btn" className="green button"
      onClick={e => {
        e.preventDefault();
        dispatch(build())
      }}
    ><Emoji symbol="🚀" /><br/>Build</button>
  )
};
export default connect()(BuildBtn);
