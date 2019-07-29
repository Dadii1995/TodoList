import React from 'react'
import renderer from 'react-test-renderer'
import Counter from '../Counter'

import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

const getWrapper = initialStore => {
  const mockStore = configureStore()
  const store = mockStore(initialStore)
  const wrapper = renderer.create(
    <Provider store={store}>
      <Counter />
    </Provider>,
  )
  const root = wrapper.root

  return { root }
}

describe('<Counter />', () => {
  test('renders span with 0', () => {
    const { root } = getWrapper({ todos: undefined })

    expect(root.findByType('span')).toBeDefined()
    expect(root.findByType('span').children).toStrictEqual(['0'])
  })
  test('renders span with items count', () => {
    const { root } = getWrapper({
      todos: [{ name: 'test1', isDone: false }, { name: 'test2', isDone: true }, { name: 'test3' }],
    })

    expect(root.findByType('span')).toBeDefined()
    expect(root.findByType('span').children).toStrictEqual(['3'])
  })
})
