import { ADD_TODO, GET_TODO_BY_ID, TOGGLE_TODO } from './types'

export const initialState = JSON.parse(localStorage.getItem('todos') || '[]') || []
const todos = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      const updatedState = [...state, { ...payload, isDone: false }]
      localStorage.setItem('todos', JSON.stringify(updatedState))
      return updatedState
    }
    case TOGGLE_TODO: {
      const updatedState = state.map(
        todo => (todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo),
      )
      localStorage.setItem('todos', JSON.stringify(updatedState))
      return updatedState
    }
    case GET_TODO_BY_ID:
      return state.filter(todo => todo.id === payload)

    default:
      return state
  }
}

export default todos
