import React, { Text, Component } from 'react-native'
import { Provider } from 'react-redux/native'
import configureStore from './store'

const initialState = {
  subscriptions: {
    channels: [],
    isFetching: false,
    hasError: false,
  },
}

const store = configureStore(initialState)

class UhuraApp extends Component {
  render () {
    return (
      <Provider store={store}>
        {() => <Text>Oi</Text>}
      </Provider>
    )
  }
}

export default UhuraApp
