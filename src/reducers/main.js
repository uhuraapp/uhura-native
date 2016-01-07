import { combineReducers } from 'redux'
import subscriptions from './subscriptions'
import channel from './channel'

const main = combineReducers({
  subscriptions,
  channel
})

export default main
