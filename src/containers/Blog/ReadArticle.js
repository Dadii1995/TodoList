import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

class ReadArticle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {},
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
      const post = res.data
      this.setState({ post })
    })
  }

  render() {
    const { post } = this.state
    return (
      <div>
        <h4>{post.userId}</h4>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    )
  }
}
ReadArticle.propTypes = {
  match: PropTypes.object.isRequired,
}
export default ReadArticle
