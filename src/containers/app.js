import React, { Component, Navigator } from 'react-native'
import MainContainer from './main'

export default class App extends Component {
  renderScene(route, navigator) {
    let Component = route.component

    return (
      <Component navigator={navigator} route={route} />
    )
  }

  render() {
    return (
      <Navigator
        ref='navigator'
        renderScene={this.renderScene}
        initialRoute={{
          component: MainContainer,
          name: 'Main'
        }}
      />
    )
  }
}
