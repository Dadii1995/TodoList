import React from 'react'
import renderer, { act } from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import Edit from '../Edit'
import { initialState } from '../../../store/profile/reducer'

const getWrapper = initialStore => {
  const mockStore = configureStore()
  const store = mockStore(initialStore)
  const wrapper = renderer.create(
    <Provider store={store}>
      <Edit />
    </Provider>,
  )
  const root = wrapper.root

  return { root, wrapper, store }
}
describe('<Edit />', () => {
  test('renders editForm', () => {
    const { wrapper } = getWrapper({ profile: initialState })
    expect(wrapper).toMatchSnapshot()
  })

})
