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
  //todo: search

  render() {
    const { posts, error, isLoading, selectedPosts, checkPost } = this.props
    const SelectArticle = id => event => {
      checkPost(id)
    }
    return (
      <div className="blog">
        <Sidebar />
        <div className="post-list">
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
                  shortBody:
                    article.body.length < 50 ? article.body : `${article.body.slice(0, 50)}...`,
                }}
                isSelected={selectedPosts.includes(article.id)}
                key={article.id}
                select={SelectArticle(article.id)}
              />
            ))
          ) : (
            <h1>No results</h1>
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
