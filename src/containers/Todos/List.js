import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import Todo from './Todo'
import { getVisibleTodos } from './utils'
import Create from './Create'
import FilterInput from './VisibilityFilter'
import { Row, Col, Container, ListGroup, ListGroupItem } from 'reactstrap'

const List = props => {
  return (
    <Container>
      <Row className="mb-3 mt-3">
        <Col>
          <Create />
        </Col>
      </Row>
      <Row>
        <Col>
          {props.todos.length > 0 ? (
            <ListGroup data-cy="todos-list">
              {props.todos.map(todo => (
                <ListGroupItem key={todo.id}>
                  <Todo todo={todo} />
                </ListGroupItem>
              ))}
            </ListGroup>
          ) : (
            <img
              alt="magnifying glass"
              src="https://5.allegroimg.com/s1440/0304ae/aaeedf914876862f8d71b2be8605"
            />
          )}
        </Col>
      </Row>
      <Row className="mb-3 mt-3">
        <Col>
          <FilterInput />
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.todosFilter),
  }
}
List.propTypes = {
  todos: PropTypes.array,
}
export default withRouter(
  connect(
    mapStateToProps,
    null,
  )(List),
)
