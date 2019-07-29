import React from 'react'
import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from '../Navigation'

const getWrapper = () => {
  const wrapper = renderer.create(
    <Router>
      <Navigation />
    </Router>,
  )
  const root = wrapper.root
  return { root, wrapper }
}

describe('<Navigation/>', () => {
  test('renders navigation bar', () => {
    const { wrapper } = getWrapper()
    expect(wrapper).toMatchSnapshot()
  })
})
