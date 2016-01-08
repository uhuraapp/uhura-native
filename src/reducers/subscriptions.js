import { REQUEST_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTIONS, FAILED_FETCH_SUBSCRIPTIONS  } from '../constants/action-types'

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
       channels: action.channels,
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
