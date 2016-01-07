// import fetch from 'isomorphic-fetch'

export const REQUEST_SUBSCRIPTIONS = "REQUEST_SUBSCRIPTIONS"
function requestSubscriptions(reddit) {
  return {
    type: REQUEST_SUBSCRIPTIONS
  }
}

export const RECEIVE_SUBSCRIPTIONS = "RECEIVE_SUBSCRIPTIONS"
function receiveSubscriptions(json) {
  return {
    type: RECEIVE_SUBSCRIPTIONS,
    channels: json.subscriptions,
    receivedAt: Date.now()
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
      .then(response => response.json())
      .then(json => dispatch(receiveSubscriptions(json)))
      .catch(/* TODO */)
  }
}
