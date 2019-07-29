import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Details from '../Details'

const getWrapper = (initialStore, id) => {
  const mockStore = configureStore()
  const store = mockStore(initialStore)
  const wrapper = renderer.create(
    <Provider store={store}>
      <Details match={{ params: { id: id } }} />
    </Provider>,
  )
  const root = wrapper.root

  return { wrapper, root }
}
describe('<Details/>', () => {
  test('renders 3 h2', () => {
    const initialState = {
      todos: [
        { id: '1', name: 'test', isDone: true },
        { id: '3', name: 'test12321312', isDone: false },
      ],
    }
    const { root } = getWrapper(initialState, '1')
    expect(root.findAllByType('h2')).toHaveLength(3)
  })
  test('renders details for todo with id:3', () => {
    const initialState = {
      todos: [
        { id: '1', name: 'test', isDone: true },
        { id: '3', name: 'test12321312', isDone: false },
      ],
    }
    const { root } = getWrapper(initialState, initialState.todos[1].id)
    const headers = root.findAllByType('h2')
    expect(headers[0].props.children[1]).toBe(initialState.todos[1].id)
    expect(headers[1].props.children[1]).toBe(initialState.todos[1].name)
    expect(headers[2].props.children[1]).toBe(initialState.todos[1].isDone ? 'yes' : 'no')
  })
})
