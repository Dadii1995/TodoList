import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Todo from '../Todo'
import sleep from '../../../utils/sleep'

const getWrapper = initialStore => {
  const mockStore = configureStore()
  const store = mockStore(initialStore)
  const wrapper = renderer.create(
    <Provider store={store}>
      <Router>
        <Todo todo={initialStore.todo} />
      </Router>
    </Provider>,
  )
  const root = wrapper.root

  return { wrapper, root, store }
}

describe('<Todo />', () => {
  test('renders span with todo classname', () => {
    const initialStore = {
      todo: { id: '1', name: 'test1', isDone: false },
      toggleTodo: jest.fn(),
    }
    const { root } = getWrapper(initialStore)

    expect(root.findByProps({ className: 'todo' })).toBeDefined()
    expect(root.findAllByProps({ className: 'todo-done' })).toHaveLength(0)
  })
  test('renders span with todo-done classname', () => {
    const initialState = {
      todo: { id: '1', name: 'test1', isDone: true },
      toggleTodo: jest.fn(),
    }
    const { root } = getWrapper(initialState)

    expect(root.findByProps({ className: 'todo-done' })).toBeDefined()
    expect(root.findAllByProps({ className: 'todo' })).toHaveLength(0)
  })
  test('should call click function', async () => {
    const initialStore = {
      todo: { id: '10', name: 'test1', isDone: false },
      toggleTodo: jest.fn(),
    }
    const { root, store } = getWrapper(initialStore)
    const paragraph = root.findByProps({ className: 'todo' })

    paragraph.props.onClick()
    const actions = store.getActions()
    await sleep()

    const action = actions.find(action => {
      return action.type === 'TOGGLE_TODO'
    })
    expect(action.payload).toBe(initialStore.todo.id)
  })
})
