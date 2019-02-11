import React from 'react';
import { connect } from 'react-redux'
import { build } from '../redux/actions'
import Emoji from './Emoji'

class BuildBtn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      animated: false
    }
  }

  onClick(e) {
    const _self = this;
    e.preventDefault();
    this.props.dispatch(build());
    this.setState({ animated: true });
    setTimeout(function (e) {
      _self.setState({ animated: false });
    }, 200);
  }

  render(state) {
    return (
      <button id="build-btn" className={'green button ' + (this.state.animated ? 'animated' : '')}
        onClick={this.onClick.bind(this)}
      ><h1><Emoji symbol="🚀" /></h1>Build</button>
    )
  }
}
export default connect()(BuildBtn);
