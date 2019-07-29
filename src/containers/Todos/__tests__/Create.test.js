import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import Create from '../Create'
import sleep from "../../../utils/sleep";

const getWrapper = initialStore => {
  const mockStore = configureStore()
  const store = mockStore(initialStore)
  const wrapper = renderer.create(
    <Provider store={store}>
      <Create />
    </Provider>,
  )
  const root = wrapper.root

  return { wrapper, root, store }
}

describe('<Create />', () => {
  test('renders div with input and button', () => {
    const { root } = getWrapper(undefined)

    expect(root.findByType('input')).toBeDefined()
    expect(root.findByType('button')).toBeDefined()
    expect(root.findByType('div')).toBeDefined()
  })
  test('should call click function', async () => {
    const initialStore = {
      addTodo: jest.fn(),
    }
    const { root, store } = getWrapper(initialStore)
    const button = root.findByType('button')
    button.props.onClick()
    await sleep()
    const actions = store.getActions()
    const action = actions.find(action => {
      return action.type === 'ADD_TODO'
    })
    expect(action.payload.name).toBe('')
  })
})
