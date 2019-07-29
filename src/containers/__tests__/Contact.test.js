import React from 'react'
import renderer from 'react-test-renderer'
import { Col, Row } from 'reactstrap'

import Contact from '../Contact'
import ContactForm from '../Contact/ContactForm'

const getWrapper = () => {
  const wrapper = renderer.create(<Contact />)
  const root = wrapper.root
  return { root, wrapper }
}

describe('<Contact/>', () => {
  test('renders two cols in row', () => {
    const { root } = getWrapper()
    expect(root.findByType(Row)).toBeDefined()
    expect(root.findAllByType(Col)).toHaveLength(2)
  })
  test('renders h1 and p in first col', () => {
    const { root } = getWrapper()
    const firstCol = root.findAllByType(Col)[0]
    expect(firstCol.findByType('h1')).toBeDefined()
    expect(firstCol.findByType('p')).toBeDefined()
  })
  test('renders ContactForm in second col', () => {
    const { root } = getWrapper()
    const secondCol = root.findAllByType(Col)[1]
    expect(secondCol.findByType(ContactForm)).toBeDefined()
  })
})
