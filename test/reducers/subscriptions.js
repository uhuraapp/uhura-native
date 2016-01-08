import expect from 'expect'
import reducer from '../../src/reducers/subscriptions'
import * as types from '../../src/constants/action-types'

describe('subscriptions reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({})
  })

  it('should handle RECEIVE_SUBSCRIPTIONS', () => {
    expect(
      reducer({}, {
        type: types.RECEIVE_SUBSCRIPTIONS,
        channels: ['Run the tests']
    })
    ).toEqual(
      {
        channels: [ 'Run the tests' ],
        hasError: false,
        isFetching: false,
        lastUpdated: undefined
      }
    )
  })

  it('should handle RECEIVE_SUBSCRIPTIONS', () => {
    expect(
      reducer({}, {
        type: types.REQUEST_SUBSCRIPTIONS
    })
    ).toEqual(
      {
        isFetching: true,
        hasError: false
      }
    )
  })

  it('should handle FAILED_FETCH_SUBSCRIPTIONS', () => {
    expect(
      reducer({}, {
        type: types.FAILED_FETCH_SUBSCRIPTIONS
    })
    ).toEqual(
      {
        isFetching: false,
        hasError: true
      }
    )
  })
})
