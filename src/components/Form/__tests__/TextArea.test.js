import renderer from 'react-test-renderer'
import React from 'react'
import { Field, Formik } from 'formik'
import TextArea from '../TextArea'

const getWrapper = initialState => {
  const wrapper = renderer.create(
    <Formik initialValues={initialState.initialValues}>
      <Field
        component={TextArea}
        label={initialState.label}
        name={initialState.name}
        placeholder={initialState.placeholder}
      />
    </Formik>,
  )
  const root = wrapper.root
  return { root, wrapper }
}
describe('<Textarea/>', () => {
  test('render textarea with label', () => {
    const initialState = {
      name: 'textArea',
      label: 'Content:',
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
  test('render textarea with placeholder', () => {
    const initialState = {
      name: 'textArea',
      placeholder: 'Content:',
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
  test('render textarea with label and placeholder', () => {
    const initialState = {
      name: 'textArea',
      placeholder: 'Content:',
      label: 'Label',
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
  test('render textarea without label and placeholder', () => {
    const initialState = {
      name: 'textArea',
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
  test('render textarea with label and initial value', () => {
    const initialState = {
      name: 'textArea',
      label: 'Label',
      initialValues: {
        textArea: 'Initial content',
      },
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
})
