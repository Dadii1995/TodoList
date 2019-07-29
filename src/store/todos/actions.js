import { ADD_TODO, TOGGLE_TODO, GET_TODO_BY_ID } from './types'
import getRandomId from '../../utils/getRandomId'

export const addTodo = name => ({
  type: ADD_TODO,
  payload: {
    name: name,
    id: getRandomId(),
  },
})
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: id,
})

export const getTodoById = id => ({
  type: GET_TODO_BY_ID,
  payload: id,
})
