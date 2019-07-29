import renderer from 'react-test-renderer'
import React from 'react'
import { Field, Formik } from 'formik'
import TextInput from '../TextInput'

const getWrapper = initialState => {
  const wrapper = renderer.create(
    <Formik initialValues={initialState.initialValues}>
      <Field
        component={TextInput}
        label={initialState.label}
        name={initialState.name}
        placeholder={initialState.placeholder}
      />
    </Formik>,
  )
  const root = wrapper.root
  return { root, wrapper }
}
describe('<TextInput/>', () => {
  test('render text input with label', () => {
    const initialState = {
      name: 'textInput',
      label: 'Content:',
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
  test('render text input with placeholder', () => {
    const initialState = {
      name: 'textInput',
      placeholder: 'Content:',
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
  test('render text input with label and placeholder', () => {
    const initialState = {
      name: 'textInput',
      placeholder: 'Content:',
      label: 'Label',
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
  test('render text input without label and placeholder', () => {
    const initialState = {
      name: 'textInput',
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
  test('render textarea with label and initial value', () => {
    const initialState = {
      name: 'textInput',
      label: 'Label',
      initialValues: {
        textArea: 'Initial content',
      },
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
})
