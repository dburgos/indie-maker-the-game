import React from 'react';
import { connect } from 'react-redux'

const MarketTip = ({ dispatch }) => {
  return (
    <div className='make-tip'>
      <h1>Build something and spread the word!</h1><h3>Or viceversa...</h3>
    </div>
  )
};
export default connect()(MarketTip);
