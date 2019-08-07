import React from 'react'
import { render, fireEvent, wait, cleanup } from '@testing-library/react'
import EditForm from '../EditForm'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const initialState = {
  onSubmit: jest.fn(x => x),
  store: {
    firstName: 'NewUser',
    url: '',
    password: 'admin123',
    birthday: '1995-06-23',
  },
}
const getWrapper = () => {
  const mockStore = configureStore()
  const store = mockStore({ profile: initialState.store })

  const { getByText, getByLabelText } = render(
    <Provider store={store}>
      <EditForm saveProfile={initialState.onSubmit} />
    </Provider>,
  )
  return { getByText, getByLabelText, store }
}

describe('<EditForm/>', () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test('Submit form after change', async () => {
    expect.assertions(1)
    const { getByText, getByLabelText } = getWrapper()
    const userName = getByLabelText('First name')
    fireEvent.change(userName, { target: { value: 'User212121' } })
    const photoUrl = getByLabelText('Photo url')
    fireEvent.change(photoUrl, {
      target: { value: 'https://i.pinimg.com/236x/a9/ef/fa/a9effa4e2bad2e03bb8dbdf9405a94d1.jpg' },
    })
    const birthday = getByLabelText('Birthday')
    fireEvent.change(birthday, { target: { value: '2019-07-15' } })

    const button = getByText('Save')
    fireEvent.click(button)

    await wait(() => {
      expect(initialState.onSubmit).toHaveBeenCalled()
    })
  })

  test('not submit - invalid url', async () => {
    const { getByText, getByLabelText } = getWrapper()

    const photoUrl = getByLabelText('Photo url')
    fireEvent.change(photoUrl, {
      target: { value: 'aaaaa' },
    })

    const button = getByText('Save')
    fireEvent.click(button)

    await wait(() => {
      expect(initialState.onSubmit).not.toHaveBeenCalled()
    })
  })
  test('submit form without changes', async () => {
    const { getByText } = getWrapper()
    const button = getByText('Save')
    fireEvent.click(button)

    await wait(() => {
      expect(initialState.onSubmit).toHaveBeenCalled()
    })
  })
})
