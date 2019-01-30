import React from 'react';
import { connect } from 'react-redux'
import { marketing } from '../actions'
import Emoji from './Emoji'

class MarketingBtn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      animated: false
    }
  }

  onClick(e) {
    const _self = this;
    e.preventDefault();
    this.props.dispatch(marketing());
    this.setState({ animated: true });
    setTimeout(function(e) {
      _self.setState({ animated: false });
    }, 500);
  }

  render(state) {
    return (
      <button id="marketing-btn" className={'pink button '+(this.state.animated?'animated':'')}
        onClick={this.onClick.bind(this)}
      ><h1><Emoji symbol="🎲" /></h1>Marketing</button>
    )
  }

}
export default connect()(MarketingBtn);
