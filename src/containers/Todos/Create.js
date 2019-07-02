import React, { useState } from 'react'

const Create = props => {
  const [todoName, setTodoName] = useState('')

  return (
    <div>
      <input
        onChange={({ target: { value } }) => {
          setTodoName(value)
        }}
        value={todoName}
      />
      <button
        onClick={() => {
          setTodoName('')
          props.onAdd(todoName)
        }}
      >
        Add
      </button>
    </div>
  )
}

export default Create
