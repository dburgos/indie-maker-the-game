import React from 'react';
import { connect } from 'react-redux'
import Emoji from './Emoji'

const mapStateToProps = state => {
  return state.make;
};

const MarketTip = (state) => {
  let output = <div className='make-tip'>
    <h1>Build something and spread the word!</h1>
    <h3>Or is it viceversa? <Emoji symbol="🤔" /></h3>
  </div>

  if (state.followers > 500) {
    output = <div className='make-tip'>
      <h1>Focus on grow your audience and conversion <Emoji symbol="👌" /></h1>
      <h3>Now you have done {state.builds} builds & {state.marketing} marketing actions</h3>
    </div>
  } else if (state.marketing > 0 || state.builds > 0) {
    output = <div className='make-tip'>
      <h1>You'll need a lot more...  <Emoji symbol="🙄" /></h1>
      <h3>Now you have done {state.builds} builds & {state.marketing} marketing actions</h3>
    </div>
  }
  return (
    output
  )
};
export default connect(mapStateToProps)(MarketTip);
