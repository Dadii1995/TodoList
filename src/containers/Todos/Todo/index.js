import React from 'react'
import PropTypes from 'prop-types'
import { toggleTodo } from '../../../store/todos/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'reactstrap'

export const Todo = ({ todo: { id, isDone, name }, toggleTodo = () => {} }) => {
  return (
    <Row>
      <Col>
        <span
          className={isDone ? 'todo-done' : 'todo'}
          id={id}
          onClick={() => {
            toggleTodo(id)
          }}
        >
          {name}
        </span>
      </Col>
      <Col xs="3">
        <Button block color="info" tag={Link} to={`/todo/${id}`}>
          Details
        </Button>
      </Col>
    </Row>
  )
}
Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    isDone: PropTypes.bool,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  toggleTodo,
}
export default connect(
  null,
  mapDispatchToProps,
)(Todo)
