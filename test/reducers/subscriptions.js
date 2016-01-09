import expect from 'expect'
import reducer from '../../src/reducers/subscriptions'
import * as types from '../../src/constants/action-types'

describe('subscriptions reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  it('should handle RECEIVE_SUBSCRIPTIONS', () => {
    const expected =  { channels: [ 'Run the tests' ],
                        hasError: false,
                        isFetching: false,
                        lastUpdated: undefined
                      }
    const action = { type: types.RECEIVE_SUBSCRIPTIONS, channels: ['Run the tests'] }
    expect(reducer({}, action)).toEqual(expected)
  })

  it('should handle RECEIVE_SUBSCRIPTIONS empty', () => {
    const expected = { isFetching: true, hasError: false }
    const action = { type: types.REQUEST_SUBSCRIPTIONS }
    expect(reducer({}, action)).toEqual(expected)
  })

  it('should handle FAILED_FETCH_SUBSCRIPTIONS', () => {
    const expected = { isFetching: false, hasError: true }
    const action = { type: types.FAILED_FETCH_SUBSCRIPTIONS }
    expect(reducer({}, action)).toEqual(expected)
  })
})
