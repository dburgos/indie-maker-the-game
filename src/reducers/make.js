const defaultState = {
  builds: 0,
  marketing: 0,
  followers: 0,
  money: 0,
  level: 0
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
    default:
      return state
  }
}

export default make
