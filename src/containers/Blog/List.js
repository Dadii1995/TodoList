import React, { Component } from 'react'
import { connect } from 'react-redux'
import Article from './Article'
import { Alert, Spinner } from 'reactstrap'
import PropTypes from 'prop-types'
import { getApiPosts, checkPost } from '../../store/blog/actions'
import Sidebar from './Sidebar'

class List extends Component {
  componentDidMount() {
    this.props.getApiPosts()
  }
  render() {
    const { posts, error, isLoading, selectedPosts, checkPost, searchQuery } = this.props
    const SelectArticle = id => event => {
      checkPost(id)
    }
    return (
      <div className="blog">
        <Sidebar />
        <div className="post-list" data-cy="posts-list">
          {isLoading ? (
            <div>
              <Spinner color="primary" type="grow" />
              <Spinner color="warning" type="grow" />
              <Spinner color="primary" type="grow" />
            </div>
          ) : error ? (
            <Alert color="danger">{error}</Alert>
          ) : posts.length > 0 ? (
            posts.map(article => (
              <Article
                article={{
                  id: article.id,
                  author: article.userId,
                  title: article.title,
                  body: article.body,
                }}
                isSelected={selectedPosts.includes(article.id)}
                key={article.id}
                searchQuery={searchQuery}
                select={SelectArticle(article.id)}
              />
            ))
          ) : (
            <h1 data-cy="no-results-header">No results</h1>
          )}
        </div>
      </div>
    )
  }
}
List.propTypes = {
  getApiPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
    }),
  ),
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  selectedPosts: PropTypes.arrayOf(PropTypes.number),
}
const mapStateToProps = ({ blog: { filteredPosts, error, isLoading, selectedPosts, filter } }) => ({
  posts: filteredPosts,
  error,
  isLoading,
  selectedPosts,
  searchQuery: filter,
})
const mapDispatchToProps = { getApiPosts, checkPost }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)
