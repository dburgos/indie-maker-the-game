const achievements = (state = [], action) => {
  switch (action.type) {
    case 'UNLOCK':
      // TODO
      return state.map(
        trophy =>
          trophy.id === action.id ? { ...achievements, unlocked: true } : achievements
      )
    default:
      return state
  }
}

export default achievements
