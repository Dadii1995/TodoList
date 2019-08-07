import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import useHighlighter from '../../hooks/useHighlighter'
import { Parser } from 'html-to-react'

const htmlToReactParser = new Parser()
export const highlightClass = 'search-highlight'

const Article = ({ article: { id, author, title, body }, select, isSelected, searchQuery }) => {
  const stopPropagation = event => event.stopPropagation()
  const highlightedTitle = useHighlighter(title, searchQuery, highlightClass)
  const highlightedBody = useHighlighter(body, searchQuery, highlightClass)

  return (
    <div
      className={classNames('article', { 'article--selected': isSelected })}
      data-cy="article"
      onClick={select}
    >
      <h1 className="article__title">{htmlToReactParser.parse(highlightedTitle)}</h1>
      <h3 className="article__author">{author}</h3>
      <p className="article__short-content">{htmlToReactParser.parse(highlightedBody)}</p>
      <Link className="article__read-more" onClick={stopPropagation} to={`/blog/${id}`}>
        Read more...
      </Link>
    </div>
  )
}

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    author: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
  }),
  select: PropTypes.func,
  isSelected: PropTypes.bool,
}

export default Article
