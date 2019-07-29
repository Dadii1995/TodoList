import reducer, { initialState } from '../reducer'
import { EDIT_PROFILE, CHANGE_PASSWORD } from '../types'

describe('profile reducer', () => {
  test('should return default state', () => {
    expect(reducer(undefined, {})).toStrictEqual(initialState)
  })
  test('should return state with new password', () => {
    expect(reducer(initialState, { type: CHANGE_PASSWORD, payload: 'NewP@$$w0rd' })).toStrictEqual({
      ...initialState,
      password: 'NewP@$$w0rd',
    })
  })
  test('should return state with new firstName, url and birthday', () => {
    expect(
      reducer(initialState, {
        type: EDIT_PROFILE,
        payload: { firstName: 'Dawid', url: 'URL', birthday: '15-07-2019' },
      }),
    ).toStrictEqual({
      ...initialState,
      firstName: 'Dawid',
      url: 'URL',
      birthday: '15-07-2019',
    })
  })
})
