const defaultState = {
  builds: 0,
  marketing: 0,
  followers: 0,
  money: 0,
  level: 0,
  conversion: 1,
  productivity: 10,
  upgrades: 0,
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
      const marketingFactor = state.marketing*state.productivity/100;
      const buildFactor = state.builds*state.productivity/100;
      return Object.assign({}, state, {
        money: state.money + parseInt(state.followers*state.conversion/100, 10),
        followers: state.followers + parseInt(marketingFactor+buildFactor, 10)+state.level,
        level: state.followers.length > 2 ? state.followers.length-2 : 0
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
