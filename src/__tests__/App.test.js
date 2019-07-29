import renderer from 'react-test-renderer'
import React from 'react'
import App from '../App'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

jest.mock('../components/Navigation', () => () => <div data-testId="Navigation">Navigation</div>)
jest.mock('../containers/Profile', () => () => <div data-testId="Profile">Profile</div>)
jest.mock('../containers/Todos', () => () => <div data-testId="Todos">Todos</div>)
jest.mock('../containers/Blog', () => () => <div data-testId="Blog">Blog</div>)
jest.mock('../containers/Contact', () => () => <div data-testId="Contact">Contact</div>)
jest.mock('../containers/Weather', () => () => <div data-testId="Weather">Weather</div>)

const getWrapper = () => {
  const mockStore = configureStore()
  const store = mockStore()
  const wrapper = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>,
  )
  const root = wrapper.root
  return { root, wrapper }
}
describe('<App/>', () => {
  test('Render App', () => {
    const { wrapper } = getWrapper()
    expect(wrapper).toMatchSnapshot()
  })
})
