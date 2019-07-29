import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import List from '../List'
import { Todo } from '../Todo'

const getWrapper = initialStore => {
  const mockStore = configureStore()
  const store = mockStore(initialStore)
  const wrapper = renderer.create(
    <Provider store={store}>
      <Router>
        <List />
      </Router>
    </Provider>,
  )
  const root = wrapper.root

  return { wrapper, root }
}

describe('<List/>', () => {
  test('renders list', () => {
    const initialState = {
      todos: [{ id: 1, name: 'test' }, { id: 3, name: 'test12321312' }],
      todosFilter: { byName: '', byStatus: 'SHOW_ALL' },
    }
    const { root } = getWrapper(initialState)

    expect(root.findAllByType(Todo)).toHaveLength(2)

    expect(root.findByProps({ id: initialState.todos[0].id })).toBeDefined()
    expect(root.findByProps({ id: initialState.todos[1].id })).toBeDefined()
  })
  test('renders img', () => {
    const initialStore = { todos: [] }
    const { root } = getWrapper(initialStore)

    expect(root.findByType('img')).toBeDefined()
  })
})
