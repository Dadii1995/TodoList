import renderer from 'react-test-renderer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

import React from 'react'
import Article from '../Article'

const getWrapper = initialState => {
  const wrapper = renderer.create(
    <Router>
      <Article article={initialState} />
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
      shortBody: 'Article body',
    }

    const { root } = getWrapper(initialState)

    const articleCointainer = root.findByType(Card)
    expect(articleCointainer).toBeDefined()

    const title = articleCointainer.findByType(CardTitle)
    expect(title).toBeDefined()
    expect(title.props.children).toContain(initialState.title)

    const author = articleCointainer.findByType(CardSubtitle)
    expect(author).toBeDefined()
    expect(author.props.children).toEqual(initialState.author)

    const shortBody = articleCointainer.findByType(CardText)
    expect(shortBody).toBeDefined()
    expect(shortBody.props.children).toContain(initialState.shortBody)

    const readMore = articleCointainer.findByType(Button)
    expect(readMore).toBeDefined()
    expect(readMore.props.to).toBe(`/blog/${initialState.id}`)
  })
})
