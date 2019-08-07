import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, wait } from '@testing-library/react'

import ContactForm from '../ContactForm'
import TextInput from '../../../components/Form/TextInput'
import SelectInput from '../../../components/Form/SelectInput'
import TextArea from '../../../components/Form/TextArea'
import CheckBox from '../../../components/Form/CheckBox'

const createNodeMock = () => {
  const focus = () => console.log('Focused')
  return {
    focus,
  }
}

const getWrapper = () => {
  const wrapper = renderer.create(<ContactForm />, {createNodeMock})
  const root = wrapper.root
  return { root, wrapper }
}
describe('<ContactForm/>', () => {
  test('renders contact forms', () => {
    const { wrapper } = getWrapper()
    expect(wrapper).toMatchSnapshot()
  })
  test('renders text input', () => {
    const { root } = getWrapper()

    expect(root.findByProps({ component: TextInput })).toBeDefined()
  })
  test('renders select input', () => {
    const { root } = getWrapper()
    const select = root.findByProps({ component: SelectInput })

    expect(select).toBeDefined()
    expect(select.props.options).toHaveLength(3)
  })
  test('renders textarea', () => {
    const { root } = getWrapper()

    expect(root.findByProps({ component: TextArea })).toBeDefined()
  })
  test('renders checkbox', () => {
    const { root } = getWrapper()

    expect(root.findByProps({ component: CheckBox })).toBeDefined()
  })
  test('submit form', async () => {
    const onSubmit = jest.fn(x => x)
    const { getByText, getByLabelText } = render(<ContactForm onSubmit={onSubmit} />)

    const input = getByLabelText('E-Mail')
    fireEvent.change(input, { target: { value: 'aaa@aaa.aa' } })

    const select = getByLabelText('Subject')
    fireEvent.select(select, { target: { value: 'Orders' } })

    const textarea = getByLabelText('Content')
    fireEvent.change(textarea, { target: { value: 'test content 123456' } })

    const checkbox = getByLabelText('Accept terms')
    fireEvent.change(checkbox, { target: { value: true } })

    const button = getByText('Send')
    fireEvent.click(button)

    await wait(() => {
      expect(onSubmit).toHaveBeenCalled()
    })
  })
})
