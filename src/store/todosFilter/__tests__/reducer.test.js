import reducer, { initialState } from '../reducer'
import { SET_VISIBILITY_FILTER, FILTER_TODOS } from '../types'
import { VisibilityFilters } from '../actions'

describe('todosFilter reducer', () => {
  test('should return default state', () => {
    expect(reducer(undefined, {})).toStrictEqual(initialState)
  })

  test('should return state after SET_VISIBILITY_FILTER action', () => {
    expect(
      reducer(initialState, {
        type: SET_VISIBILITY_FILTER,
        payload: VisibilityFilters.SHOW_COMPLETED,
      }),
    ).toStrictEqual({ byStatus: VisibilityFilters.SHOW_COMPLETED, byName: '' })
    expect(
      reducer(undefined, {
        type: SET_VISIBILITY_FILTER,
        payload: VisibilityFilters.SHOW_ACTIVE,
      }),
    ).toStrictEqual({ byStatus: VisibilityFilters.SHOW_ACTIVE, byName: '' })
  })
  test('should return state after FILTER_TODOS action', () => {
    expect(
      reducer(initialState, {
        type: FILTER_TODOS,
        payload: '',
      }),
    ).toStrictEqual({ byStatus: VisibilityFilters.SHOW_ALL, byName: '' })
    expect(
      reducer(undefined, {
        payload: '',
        type: FILTER_TODOS,
      }),
    ).toStrictEqual(initialState)
  })
})
