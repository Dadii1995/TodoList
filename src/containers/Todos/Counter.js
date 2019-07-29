import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getVisibleTodos } from './utils'

export const Counter = ({ todos }) => {
  return <span>{todos ? todos.length : '0'}</span>
}

const mapStateToProps = ({ todos, todosFilter }) => ({
  todos: getVisibleTodos(todos, todosFilter),
})

Counter.propTypes = {
  todos: PropTypes.array,
}

export default connect(
  mapStateToProps,
  null,
)(Counter)
