import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getVisibleTodos } from '../utils'

class Details extends Component {
  constructor(props) {
    super(props)
    this.state = { todo: {} }
  }
  componentDidMount() {
    const { todos, match } = this.props
    const todo = todos.find(todo => todo.id === match.params.id)
    this.setState({ todo })
  }

  render() {
    const { todo } = this.state
    return (
      <div>
        <h2>ID: {todo.id}</h2>
        <h2>Name: {todo.name}</h2>
        <h2>isDone: {todo.isDone ? 'yes' : 'no'}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.todosFilter),
  }
}
Details.propTypes = {
  match: PropTypes.object,
  todos: PropTypes.array,
}

export default connect(
  mapStateToProps,
  undefined,
)(Details)
