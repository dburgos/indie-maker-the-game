const defaultState = {
  builds: 0,
  marketing: 0,
  followers: 0,
  money: 100,
  level: 0,
  conversion: 1,
  productivity: 10,
  upgrades: 0,
  playTime: 0,
  startPlay: new Date()
}
const make = (state = defaultState, action) => {
  switch (action.type) {
    case 'BUILD':
      return Object.assign({}, state, {
        builds: state.builds+1
      });
    case 'MARKETING':
      return Object.assign({}, state, {
        marketing: state.marketing+1
      });
    case 'UPDATE':
      const random = Math.random() * 100;
      if (random < 90) {
        return state;
      }
      const marketingFactor = state.marketing*state.productivity/300;
      const buildFactor = state.builds*state.productivity/1000;
      return Object.assign({}, state, {
        money: state.money + parseInt(state.followers*state.conversion/1000, 10),
        followers: state.marketing === 0 ? 0 : state.followers + parseInt(marketingFactor+buildFactor, 10)+state.level,
        level: state.followers.toString().length > 2 ? state.followers.toString().length-2 : 0,
        playTime: (new Date().getTime()-state.startPlay.getTime())/1000
      });
    case 'UPGRADE':
      const upgrade = action.payload;
      return Object.assign({}, state, {
        upgrades: state.upgrades+1,
        money: state.money-(upgrade.cost || 0),
        marketing: state.marketing+(upgrade.payload || 0),
        followers: state.followers+(upgrade.followers || 0),
        level: state.level+(upgrade.level || 0),
        conversion: state.conversion+(upgrade.conversion || 0),
        productivity: state.productivity+(upgrade.productivity || 0)
      });
    default:
      return state
  }
}

export default make
