import { REQUEST_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTIONS } from '../actions/subscriptions'


export default function subscriptions(state = {}, action) {
  switch (action.type) {
    case REQUEST_SUBSCRIPTIONS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
        channels: []
      })
    case RECEIVE_SUBSCRIPTIONS:
     return Object.assign({}, state, {
       isFetching: false,
       didInvalidate: false,
       channels: action.channels,
       lastUpdated: action.receivedAt
     })
    default:
      return state
  }
}
