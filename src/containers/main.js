import React, { Component, Text } from 'react-native'
import { connect } from 'react-redux/native'
import MainComponent from '../components/main'

class MainContainer extends Component {
  render() {
    return (
      <MainComponent {...this.props} />
    )
  }
}

function map(state) {
  return state;
}

export default connect(map)(MainContainer)
