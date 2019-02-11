import { combineReducers } from 'redux'
import make from './make'
import upgrades from './upgrades'
import achievements from './achievements'

export default combineReducers({
  make,
  upgrades,
  achievements
})
