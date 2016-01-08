import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../src/actions/subscriptions'
import * as types from '../../src/constants/action-types'
import nock from 'nock'
import sinon from 'sinon'


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

var clock

describe('async actions', () => {
  beforeEach(() => {
    clock = sinon.useFakeTimers()
  })

  afterEach(() => {
    nock.cleanAll()
    clock.restore()
  })

  it('creates RECEIVE_SUBSCRIPTIONS when fetching subscriptions has been done', (done) => {
    nock('https://api.uhura.io')
      .get('/v2/users/subscriptions')
      .reply(200, { subscriptions: ['do something'] })

    const expectedActions = [
      { type: types.REQUEST_SUBSCRIPTIONS },
      { type: types.RECEIVE_SUBSCRIPTIONS, channels: ['do something'], receivedAt: 0 }
    ]
    const store = mockStore({ subscriptions: [] }, expectedActions, done)
    store.dispatch(actions.fetchSubscriptions())
  })

  it('creates FAILED_FETCH_SUBSCRIPTIONS when fetching subscriptions has been failed', (done) => {
    nock('https://api.uhura.io')
      .get('/v2/users/subscriptions')
      .reply(401, {})

    const expectedActions = [
      { type: types.REQUEST_SUBSCRIPTIONS },
      { type: types.FAILED_FETCH_SUBSCRIPTIONS }
    ]
    const store = mockStore({ subscriptions: [] }, expectedActions, done)
    store.dispatch(actions.fetchSubscriptions())
  })
})
