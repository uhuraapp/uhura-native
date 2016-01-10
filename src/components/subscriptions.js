import React, {
  Component,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

import GridView from 'react-native-grid-view'
import ProgressBar from 'ProgressBarAndroid'

import { fetchSubscriptionsIfNeeded } from '../actions/subscriptions'

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  progressbar: {
    alignItems: 'center'
  },
  container: {
    backgroundColor: '#f4f4f4'
  },
  subscriptionsScroll: {
    height: deviceHeight
  },
  subscriptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 100
  }
})

const styleSubscription = StyleSheet.create({
  container: {
    width: (deviceWidth/3)-10,
    backgroundColor: "#FFF",
    padding: 5,
    borderRadius: 2,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 2
  }
});

export default class Subscriptions extends Component {
  componentWillMount() {
    const { dispatch, subscriptions } = this.props
    dispatch(fetchSubscriptionsIfNeeded(subscriptions))
  }

  renderSubscription(subscription) {
    return (
      <View key={subscription.raw_id} style={styleSubscription.container}>
        <Image source={{uri: subscription.image_url}}
       style={{width: (deviceWidth/3)-20, height: (deviceWidth/3)-20}} />
        <Text numberOfLines={2}>{subscription.title}</Text>
      </View>
    )
  }

  render() {
    const { subscriptions: { channels, isFetching, hasError } } = this.props
    return (
      <View key='container' style={styles.container}>
      { isFetching &&
        <View key='progressbar' style={styles.progressbar}>
          <ProgressBar styleAttr='Small' />
        </View>
      }
      {
        hasError &&
        <Text>Error</Text>
      }
      <ScrollView style={styles.subscriptionsScroll}>
        <View style={styles.subscriptions}>
          {channels.map(this.renderSubscription.bind(this))}
        </View>
      </ScrollView>
      </View>
    )
  }
}
