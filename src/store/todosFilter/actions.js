import { FILTER_TODOS, SET_VISIBILITY_FILTER } from './types'

export const filterTodos = (name, filter) => ({
  type: FILTER_TODOS,
  payload: {
    name,
    filter,
  },
})
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  payload: filter,
})
export const setTextFilter = filter => ({
  type: FILTER_TODOS,
  payload: filter,
})
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
}
