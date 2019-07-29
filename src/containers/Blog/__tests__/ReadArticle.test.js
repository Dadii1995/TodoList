import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'

import ReadArticle from '../ReadArticle'
import mockAxios from '../__mocks__/axios'

const getWrapper = id => {
  const wrapper = renderer.create(
    <Router>
      <ReadArticle match={{ params: { id: id } }} />
    </Router>,
  )
  const root = wrapper.root

  return { root }
}
describe('<ReadArticle/>', () => {
  test('fetch post from api', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: {} }))
    const id = 1
    const { root } = getWrapper(id)

    expect(mockAxios.get).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/posts/${id}`)
  })
  test('render article', () => {
    const { root } = getWrapper(1)
    const articleContainer = root.findByType('div')

    expect(articleContainer).toBeDefined()
    expect(articleContainer.findByType('h1')).toBeDefined()
    expect(articleContainer.findByType('h4')).toBeDefined()
    expect(articleContainer.findByType('p')).toBeDefined()
  })
})
