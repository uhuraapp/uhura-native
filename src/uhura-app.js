import React, { Text, Component } from 'react-native'
import { Provider } from 'react-redux/native'
import configureStore from './store'

const store = configureStore()

class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        {() => <Text>Oi</Text>}
      </Provider>
    )
  }
}

export default Root
