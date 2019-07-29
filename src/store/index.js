import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import todos from './todos/reducer'
import todosFilter from './todosFilter/reducer'
import profile from './profile/reducer'
import thunk from 'redux-thunk'
import { weather } from './weather/reducer'
import { blog } from './blog/reducer'

const todoApp = combineReducers({
  todos,
  todosFilter,
  profile,
  weather,
  blog,
})

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      )
    : compose(applyMiddleware(thunk)),
)

export default store
