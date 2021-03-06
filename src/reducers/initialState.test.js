// @flow
import initialState from './initialState'
import type { ReduxState } from '../types'

describe('initialState', () => {
  let state: ReduxState

  beforeEach(() => {
    state = initialState
  })

  it('matches the current initialState snapshot', () => {
    expect(state).toMatchSnapshot()
  })
})
