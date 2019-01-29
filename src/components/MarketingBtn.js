import React from 'react';
import { connect } from 'react-redux'
import { marketing } from '../actions'

const MarketingBtn = ({ dispatch }) => {
  return (
    <button id="marketing-btn" className="pink button"
      onClick={e => {
        e.preventDefault();
        dispatch(marketing())
      }}
    >Marketing</button>
  )
};
export default connect()(MarketingBtn);
