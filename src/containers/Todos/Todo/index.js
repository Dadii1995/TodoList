import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ id, name, setDone, isDone }) => {
  return (
    <p className={isDone ? 'todo-done' : 'todo'} onClick={setDone(id)}>
      {name}
    </p>
  )

  // const divStyle = {
  //     display: 'inline-block',
  // }
  // if (isDone) {
  //   return (
  //     <div>
  //       <div key={id} style={{ display: 'inline-block' }}>
  //         <strike> {name}</strike>
  //       </div>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <div key={id} style={divStyle}>
  //         {name}
  //       </div>
  //       <button
  //         onClick={() => {
  //           setDone(id)
  //         }}
  //       >
  //         Done
  //       </button>
  //     </div>
  //   )
  // }
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.number.isRequired,
  isDone: PropTypes.bool,
  setDone: PropTypes.func,
}

export default Todo
