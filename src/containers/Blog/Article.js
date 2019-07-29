import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const Article = ({ article: { id, author, title, shortBody }, select, isSelected }) => {
  const stopPropagation = event => event.stopPropagation()
  return (
    <div className={classNames('article', { 'article--selected': isSelected })} onClick={select}>
      <h1 className="article__title">{title}</h1>
      <h3 className="article__author">{author}</h3>
      <p className="article__short-content">{shortBody}</p>
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
