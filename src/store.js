import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers/main'
import { fetchSubscriptions } from './actions/subscriptions'
import { openChannel } from './actions/channel'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducers)
  return store;
}

let store = configureStore();

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// Dispatch some actions
store.dispatch(openChannel(2))
store.dispatch(openChannel(3))
store.dispatch(openChannel(4))
store.dispatch(fetchSubscriptions(0))

// Stop listening to state updates
unsubscribe()
