import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import TextFilter from '../TextFilter'
import sleep from '../../../utils/sleep'

const getWrapper = initialStore => {
  const mockStore = configureStore()
  const store = mockStore(initialStore)
  const wrapper = renderer.create(
    <Provider store={store}>
      <TextFilter />
    </Provider>,
  )
  const root = wrapper.root

  return { wrapper, root, store }
}

describe('<TextFilter />', () => {
  test('renders div with input and button', () => {
    const { root } = getWrapper(undefined)
    expect(root.findByType('input')).toBeDefined()
    expect(root.findByType('button')).toBeDefined()
    expect(root.findByType('div')).toBeDefined()
  })
  test('should call click function', async () => {
    const defaultProps = {
      setTextFilter: jest.fn(),
    }
    const { root, store } = getWrapper(defaultProps)
    const button = root.findByType('button')
    button.props.onClick()
    await sleep()
    const action = store.getActions().find(action => action.type === 'FILTER_TODOS')

    expect(action.payload).toBe('')
  })
})
