import { VisibilityFilters } from '../../store/todosFilter/actions'

export const getVisibleTodos = (todos, filter = {}) => {
  switch (filter.byStatus) {
    case VisibilityFilters.SHOW_ALL:
      return todos.filter(todo => todo.name.includes(filter.byName))
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.isDone && todo.name.includes(filter.byName))
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.isDone && todo.name.includes(filter.byName))
    default:
      return todos
  }
}
