const defaultState = [
  {
    key: 1,
    icon: '💰',
    title: 'The first one',
    description: 'Get a $1M for your first time',
    field: 'money',
    minValue: 1000000,
    unlocked: false
  },
  {
    key: 2,
    icon: '😂',
    title: 'Look Zuck!',
    description: 'Grow your audience to 10M people',
    field: 'followers',
    minValue: 10000000,
    unlocked: false
  },
  {
    key: 3,
    icon: '✨',
    title: 'The Key',
    description: 'Do more than 1,000 marketing actions',
    field: 'marketing',
    minValue: 1000,
    unlocked: false
  },
  {
    key: 5,
    icon: '🛒',
    title: 'I take everything, thanks',
    description: 'Buy all upgrades',
    field: 'upgrades',
    minValue: 15,
    unlocked: false
  },
  {
    key: 4,
    icon: '🎱',
    title: 'I feel lucky',
    description: 'Can you reach level 8?',
    field: 'level',
    minValue: 8,
    unlocked: false
  },
  {
    key: 6,
    icon: '🥰',
    title: 'Thank you!',
    description: 'Play 1 hour',
    field: 'playTime',
    minValue: 3600,
    unlocked: false
  }
];

const achievements = (state = defaultState, action) => {
  switch (action.type) {
    case 'UNLOCK':
      const data = action.stats;
      return state.map(
        trophy => {
          if (!trophy.unlocked) {
            const unlocked = data[trophy.field] >= trophy.minValue;
            trophy.unlocked = unlocked;
          }
          return trophy;
        }
      )
    default:
      return state
  }
}

export default achievements
