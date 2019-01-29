import React from 'react';
import { connect } from 'react-redux'
import { update } from '../actions'

const mapStateToProps = state => {
  return state.make;
};

class GameTimer extends React.Component {

  constructor(props) {
    super(props);
    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  timer() {
    this.props.dispatch(update());
  }

  render(state) {
    return ( null )
  }
};

export default connect(mapStateToProps)(GameTimer);
