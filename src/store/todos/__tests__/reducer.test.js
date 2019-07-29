import reducer, { initialState } from '../reducer'
import { ADD_TODO } from '../types'

describe('todos reducer', () => {
  test('should return default state', () => {
    expect(reducer(undefined, {})).toStrictEqual(initialState)
  })
  test('should return state with new element', () => {
    expect(reducer([], { type: ADD_TODO, payload: { id: 5, name: 'Test' } })).toStrictEqual([
      { id: 5, name: 'Test', isDone: false },
    ])
  })
})
