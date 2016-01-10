import React, {
  Component,
  PropTypes,
  StyleSheet,
  Text,
  ToolbarAndroid,
  View,
} from 'react-native'

import Subscriptions from './subscriptions'

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  toolbar: {
    backgroundColor: '#363B45',
    height: 50,
  }
})


let toolbarActions = [
]

class MainComponent extends Component {
  renderContent() {
    return (
      <Subscriptions {...this.props} />
    )
  }


  render() {
   return (
     <View style={styles.container}>
       <ToolbarAndroid
         logo={require('./assets/uhura.png')}
         style={styles.toolbar}
         actions={toolbarActions}
       />
       {this.renderContent()}
     </View>
   )
  }
}

MainComponent.propTypes = {
  dispatch: PropTypes.func.isRequired,
  subscriptions: PropTypes.object.isRequired
}

export default MainComponent
