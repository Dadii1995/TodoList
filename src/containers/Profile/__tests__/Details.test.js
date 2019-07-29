import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import Details from '../Details'
import { initialState } from '../../../store/profile/reducer'

const getWrapper = initialStore => {
  const mockStore = configureStore()
  const store = mockStore(initialStore)
  const wrapper = renderer.create(
    <Provider store={store}>
      <Details />
    </Provider>,
  )
  const root = wrapper.root

  return { root, store }
}
describe('<Details/>', () => {
  test('renders h1 and img', () => {
    const { root } = getWrapper({ profile: initialState })
    expect(root.findByType('img')).toBeDefined()
    expect(root.findByType('h1')).toBeDefined()
  })
  test('renders with default state', () => {
    const { root } = getWrapper({ profile: initialState })
    expect(
      root.findByProps({
        src:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9VCf49a2QF71f1yK5qNkH4yEdU02IJpErZdnx3BnfO6q5dWk',
      }),
    ).toBeDefined()
  })
  test('renders with new name and image', () => {
    const initialStore = {
      profile: {
        firstName: 'Dawid',
        url: 'https://d2r55xnwy6nx47.cloudfront.net/uploads/2016/07/spokes0.jpg',
      },
    }
    const { root } = getWrapper(initialStore)
    expect(
      root.findByProps({
        src: initialStore.profile.url,
      }),
    ).toBeDefined()
    expect(root.findByType('h1').props.children[1]).toBe(initialStore.profile.firstName)
  })
})
