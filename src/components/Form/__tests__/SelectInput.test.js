import renderer from 'react-test-renderer'
import React from 'react'
import { Field, Formik } from 'formik'
import SelectInput from '../SelectInput'

const getWrapper = initialState => {
  const wrapper = renderer.create(
    <Formik initialValues={initialState.initialValues}>
      <Field
        component={SelectInput}
        label={initialState.label}
        name={initialState.name}
        options={initialState.options}
      />
    </Formik>,
  )
  const root = wrapper.root
  return { root, wrapper }
}
describe('<SelectInput/>', () => {
  test('renders select without options', () => {
    const initialState = {
      name: 'selectInput',
      label: 'Select:',
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
  test('renders select with initial value', () => {
    const initialState = {
      name: 'selectInput',
      label: 'Select:',
      options: [
        {
          value: 'Val1',
          label: 'Lab1',
        },
        {
          value: 'Val2',
          label: 'Lab2',
        },
        {
          value: 'Val3',
          label: 'Lab3',
        },
        {
          value: 'Val4',
          label: 'Lab4',
        },
        {
          value: 'Val5',
          label: 'Lab5',
        },
      ],
      initialValues: {
        selectInput: 'Val2',
      },
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
  test('renders select without options', () => {
    const initialState = {
      name: 'selectInput',
      label: 'Select:',
    }
    const { wrapper } = getWrapper(initialState)
    expect(wrapper).toMatchSnapshot()
  })
})
