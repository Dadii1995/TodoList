import renderer from 'react-test-renderer'
import React from 'react'
import { Field, Formik } from 'formik'
import PasswordInput from '../PasswordInput'

const getWrapper = initialState => {
  const wrapper = renderer.create(
    <Formik errors={initialState.errors} initialValues={initialState.initialValues}>
      <Field component={PasswordInput} label={initialState.label} name={initialState.name} />
    </Formik>
  )
  const root = wrapper.root
  return { root, wrapper }
}
describe('<PasswordInput/>', () => {
  test('render password input with label', () => {
    const initialState = {
      name: 'passwordInput',
      label: 'Password',
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
  test('render password input without label', () => {
    const initialState = {
      name: 'passwordInput',
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
  test('render password input with initial value', () => {
    const initialState = {
      name: 'passwordInput',
      label: 'Password',
      initialValues: {
        passwordInput: 'Admin123',
      },
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
  test('render password input with error', () => {
    const initialState = {
      name: 'passwordInput',
      label: 'Password',
      errors: {
        passwordInput: 'Required',
      },
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
})
