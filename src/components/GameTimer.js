import React from 'react';
import { connect } from 'react-redux'
import { update, achievements } from '../actions'

const mapStateToProps = state => {
  return state.make;
};

class GameTimer extends React.Component {

  constructor(props) {
    super(props);
    this.timer = this.timer.bind(this);
    this.checkAchievements = this.checkAchievements.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.timer, 60);
    this.intervalAchievements = setInterval(this.checkAchievements, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.intervalAchievements);
  }

  timer() {
    this.props.dispatch(update());
  }

  checkAchievements() {
    this.props.dispatch(achievements(this.props));
  }

  render(state) {
    return ( null )
  }
};

export default connect(mapStateToProps)(GameTimer);
