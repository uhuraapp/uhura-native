import { REQUEST_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTIONS, FAILED_FETCH_SUBSCRIPTIONS  } from '../constants/action-types'

const fixMissingImage = (_channel) => {
  const channel = {..._channel}
  if(!channel.image_url || channel.image_url == "") {
    channel.image_url = 'https://uhura.io/assets/channel-placeholder.png'
  }
  return channel;
}

export default function subscriptions(state = {}, action) {
  switch (action.type) {
    case REQUEST_SUBSCRIPTIONS:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
      })
    case RECEIVE_SUBSCRIPTIONS:
     return Object.assign({}, state, {
       isFetching: false,
       hasError: false,
       channels: action.channels.map(fixMissingImage),
       lastUpdated: action.receivedAt
     })
    case FAILED_FETCH_SUBSCRIPTIONS:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true
      })
    default:
      return state
  }
}
