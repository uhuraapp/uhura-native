import { REQUEST_SUBSCRIPTIONS, RECEIVE_SUBSCRIPTIONS, FAILED_FETCH_SUBSCRIPTIONS  } from '../constants/action-types'
import { checkStatus, parseJSON } from '../request'

function requestSubscriptions() {
  return {
    type: REQUEST_SUBSCRIPTIONS
  }
}

function receiveSubscriptions(json) {
  return {
    type: RECEIVE_SUBSCRIPTIONS,
    channels: json.subscriptions,
    receivedAt: Date.now()
  }
}

function failedFetchSubcriptions(e) {
  return {
    type: FAILED_FETCH_SUBSCRIPTIONS
  }
}

export function fetchSubscriptions() {
  return dispatch => {
    dispatch(requestSubscriptions())

    return fetch(`https://api.uhura.io/v2/users/subscriptions`, {
      headers: {
        'Authorization': 'Token %PUT YOU TOKEN HERE%'
      }
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(json => dispatch(receiveSubscriptions(json)))
    .catch(e => dispatch(failedFetchSubcriptions(e)))
  }
}
