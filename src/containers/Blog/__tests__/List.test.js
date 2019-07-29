import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'

import mockAxios from '../__mocks__/axios'
import List from '../List'
import Article from '../Article'

const getWrapper = () => {
  const wrapper = renderer.create(
    <Router>
      <List />
    </Router>,
  )
  const root = wrapper.root

  return { root, wrapper }
}
describe('<List>', () => {
  test('fetch posts from api', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: {} }))
    const { root } = getWrapper()
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts')
  })

  test('renders list', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }))
    const { root } = getWrapper()
    expect(root.findAllByType(Article)).toBeDefined()
  })

  // test('failed fetch posts from api', async () => {
  //   mockAxios.get.mockImplementationOnce(() =>
  //     Promise.reject({
  //       request: {
  //         status: 404,
  //         response: { message: 'problem' },
  //       },
  //     }),
  //   )
  //   const { root, wrapper } = getWrapper()
  //   expect(mockAxios.get).toHaveBeenCalledTimes(1)
  // })
})
