import { VisibilityFilters } from './actions'
import { SET_VISIBILITY_FILTER, FILTER_TODOS } from './types'

export const initialState = { byStatus: VisibilityFilters.SHOW_ALL, byName: '' }

const todosFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: {
      return { ...state, byStatus: action.payload }
    }
    case FILTER_TODOS: {
      return { ...state, byName: action.payload }
    }
    default:
      return state
  }
}

export default todosFilter
