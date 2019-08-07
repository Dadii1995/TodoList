import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'

import React from 'react'
import Article from '../Article'

const getWrapper = initialState => {
  const wrapper = renderer.create(
    <Router>
      <Article article={initialState} isSelected={false} searchQuery="" />
    </Router>,
  )
  const root = wrapper.root

  return { wrapper, root }
}
describe('<Article/>', () => {
  test('render article div', () => {
    const initialState = {
      id: 1,
      author: 1,
      title: 'Title',
      body: 'Article body',
    }

    const { root } = getWrapper(initialState)
    const articleCointainer = root.findByProps({ className: 'article' })
    expect(articleCointainer).toBeDefined()

    const title = articleCointainer.findByProps({ className: 'article__title' })
    expect(title).toBeDefined()
    expect(title.props.children).toContain(initialState.title)

    const author = articleCointainer.findByProps({ className: 'article__author' })
    expect(author).toBeDefined()
    expect(author.props.children).toEqual(initialState.author)

    const body = articleCointainer.findByProps({ className: 'article__short-content' })
    expect(body).toBeDefined()
    expect(body.props.children).toContain(initialState.body)

    const readMore = articleCointainer.findByProps({ className: 'article__read-more' })
    expect(readMore).toBeDefined()
    expect(readMore.props.to).toBe(`/blog/${initialState.id}`)
  })
})
