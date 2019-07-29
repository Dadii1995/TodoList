import renderer from 'react-test-renderer'
import React from 'react'
import { Field, Formik } from 'formik'
import CheckBox from '../CheckBox'

const getWrapper = initialState => {
  const wrapper = renderer.create(
    <Formik initialValues={initialState.initialValues}>
      <Field component={CheckBox} label={initialState.label} name={initialState.name} />
    </Formik>,
  )
  const root = wrapper.root
  return { root, wrapper }
}
describe('<Checkbox/>', () => {
  test('render checkbox with label', () => {
    const initialState = {
      name: 'testCheckbox',
      label: 'Accept terms',
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
  test('render checkbox without label', () => {
    const initialState = {
      name: 'testCheckbox',
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
  test('render checkbox with initial value', () => {
    const initialState = {
      name: 'testCheckbox',
      initialValues: {
        testCheckbox: true,
      },
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
})
