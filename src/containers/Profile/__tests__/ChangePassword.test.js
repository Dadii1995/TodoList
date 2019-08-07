import React from 'react'
import renderer, { act } from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import ChangePassword from '../ChangePassword'
import { initialState } from '../../../store/profile/reducer'
import { CHANGE_PASSWORD } from '../../../store/profile/types'
import sleep from '../../../utils/sleep'

const createNodeMock = () => {
  const focus = () => console.log('Focused')
  return {
    focus,
  }
}


const getWrapper = initialStore => {
  const mockStore = configureStore()
  const store = mockStore(initialStore)
  const wrapper = renderer.create(
    <Provider store={store}>
      <ChangePassword />
    </Provider>,
    { createNodeMock },
  )
  const root = wrapper.root

  return { root, store }
}
describe('<ChangePassword/>', () => {
  test('renders div with input and button', () => {
    const { root } = getWrapper({ profile: initialState })

    expect(root.findByType('button')).toBeDefined()
    expect(root.findAllByType('input')).toHaveLength(1)
    expect(root.findByType('div')).toBeDefined()
  })
  test('change password', async () => {
    const { root, store } = getWrapper({ profile: initialState })

    const input = root.findByType('input')
    act(() => {
      input.props.onChange({ target: { value: 'NewP@$$word' } })
    })
    await sleep()
    const button = root.findByType('button')
    button.props.onClick()
    await sleep()
    const action = store.getActions().find(action => {
      return action.type === CHANGE_PASSWORD
    })
    expect(action.payload).toBe('NewP@$$word')
  })
  test('call onClick without changes', async () => {
    const { root, store } = getWrapper({ profile: initialState })

    const button = root.findByType('button')
    button.props.onClick()
    await sleep()
    const action = store.getActions().find(action => {
      return action.type === CHANGE_PASSWORD
    })
    expect(action.payload).toBe(initialState.password)
  })
})
