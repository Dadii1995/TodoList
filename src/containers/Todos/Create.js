import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTodo } from '../../store/todos/actions'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'

export const Create = props => {
  const [todoName, setTodoName] = useState('')
  return (
    <InputGroup>
      <Input
        data-cy="create-todo-input"
        onChange={({ target: { value } }) => {
          setTodoName(value)
        }}
        placeholder="TODO"
        type="text"
        value={todoName}
      />
      <InputGroupAddon addonType="prepend">
        <Button
          data-cy="create-todo-button"
          onClick={() => {
            props.addTodo(todoName)
            setTodoName('')
          }}
        >
          ADD
        </Button>
      </InputGroupAddon>
    </InputGroup>
  )
}
const mapDispatchToProps = {
  addTodo,
}
Create.propTypes = {
  addTodo: PropTypes.func,
}
export default connect(
  null,
  mapDispatchToProps,
)(Create)
