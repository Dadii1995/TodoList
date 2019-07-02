import React from 'react'
import Todo from './Todo'

const Todos = props =>
  props.todos.map(({ id, name, isDone }) => (
    <Todo id={id} isDone={isDone} key={id} name={name} setDone={props.setDone} />
  ))

export default Todos
