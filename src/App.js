import React from 'react'
import './App.css'
import Todos from './containers/Todos'
import Create from './containers/Todos/Create'

class App extends React.Component {
  state = {
    todos: [{ id: 1, name: 'test1', isDone: false }, { id: 2, name: 'test2', isDone: true }],
  }

  addTodo = name => {
    // const currentTodos = this.state.todos
    // currentTodos.push({ id: currentTodos.length + 1, name: name, isDone: false })
    // this.setState({ todos: currentTodos })
    //vs
    this.setState(state => {
      return { todos: [...state.todos, { id: state.todos.length + 1, name, isDone: false }] }
    })
  }


  toggleTodo = id => () => {
    this.setState(state => {
      const todo = state.todos.find(t => t.id === id)
      if (todo) {
        todo.isDone = !todo.isDone
      }
      return state
    })
  }

  render() {
    return (
      <div className="App">
        <Create onAdd={this.addTodo} />
        <h1>{this.state.todos.length}</h1>
        <Todos setDone={this.toggleTodo} todos={this.state.todos} />
      </div>
    )
  }
}

export default App
