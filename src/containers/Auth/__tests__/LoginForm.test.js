import React from 'react'
import renderer from 'react-test-renderer'
import LoginForm from '../LoginForm'

const getWrapper = () => {
  const wrapper = renderer.create(<LoginForm />)
  const root = wrapper.root
  return { root, wrapper }
}
describe('<LoginForm/>', () => {
  test('should render login form', () => {
    const { wrapper } = getWrapper()

    expect(wrapper).toMatchSnapshot()
  })
})
