const defaultState = [
  {
    id: 1,
    icon: '⚡️',
    title: 'Upgrade to SSD servers',
    description: 'Conversion +5%',
    cost: 250,
    acquired: false,
    update: {
      conversion: 5
    }
  },
  {
    id: 2,
    icon: '👩‍🎨',
    title: 'Influencer Campaign',
    description: 'Followers +225',
    cost: 1000,
    acquired: false,
    update: {
      followers: 225
    }
  },
  {
    id: 3,
    icon: '💻',
    title: 'New powerful laptop',
    description: 'Productivity +10%',
    cost: 2500,
    acquired: false,
    update: {
      productivity: 10
    }
  },
  {
    id: 4,
    icon: '🔮',
    title: 'Ads Campaign #1',
    description: 'Followers +583',
    cost: 3000,
    acquired: false,
    update: {
      followers: 583
    }
  },
  {
    id: 5,
    icon: '👱‍♀️',
    title: 'Hire blogger',
    description: 'Conversion +3%',
    cost: 30000,
    acquired: false,
    update: {
      conversion: 3
    }
  },
  {
    id: 6,
    icon: '🧛‍♂️',
    title: 'Hire lawyer',
    description: 'Productivity +2%',
    cost: 50000,
    acquired: false,
    update: {
      productivity: 2
    }
  },
  {
    id: 7,
    icon: '📊',
    title: 'Use Ghostboard for the blog',
    description: 'Productivity +10%',
    cost: 500,
    acquired: false,
    update: {
      productivity: 10
    }
  },
  {
    id: 8,
    icon: '🤖',
    title: 'Automatize some tasks',
    description: 'Productivity +7%',
    cost: 9000,
    acquired: false,
    update: {
      productivity: 7
    }
  },
  {
    id: 9,
    icon: '🔮',
    title: 'Ads Campaign #2',
    description: 'Followers +2,000',
    cost: 45000,
    acquired: false,
    update: {
      followers: 2000
    }
  },
  {
    id: 10,
    icon: '👩',
    title: 'Hire a marketer',
    description: 'Conversion +5%',
    cost: 69000,
    acquired: false,
    update: {
      conversion: 5
    }
  },
  {
    id: 11,
    icon: '👩‍💻',
    title: 'Hire a dev',
    description: 'Builds +1,000',
    cost: 95000,
    acquired: false,
    update: {
      builds: 1000
    }
  },
  {
    id: 12,
    icon: '🔥',
    title: 'Rise salaries',
    description: 'Productivity +10%',
    cost: 100000,
    acquired: false,
    update: {
      productivity: 10
    }
  },
  {
    id: 13,
    icon: '📺',
    title: 'TV ad',
    description: 'Followers +10,000',
    cost: 125000,
    acquired: false,
    update: {
      followers: 10000
    }
  },
  {
    id: 14,
    icon: '🔮',
    title: 'Ads Campaign #3',
    description: 'Followers +5,000',
    cost: 150000,
    acquired: false,
    update: {
      followers: 5000
    }
  },
  {
    id: 15,
    icon: '🏈',
    title: 'SuperBowl Ad',
    description: 'Followers +500,000',
    cost: 1000000,
    acquired: false,
    update: {
      followers: 500000
    }
  }
]
const upgrades = (state = defaultState, action) => {
  switch (action.type) {
    case 'BUY':
      // Mark as acquired
      const updatedItems = state.map(item => {
        if (item.id === action.id){
          item.acquired = true;
          return item;
        }
        return item;
      })
      return updatedItems;
    default:
      return state
  }
}

export default upgrades
