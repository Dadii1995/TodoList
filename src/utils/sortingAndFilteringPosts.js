import orderBy from 'lodash/orderBy'
import { OrderTypes } from '../store/blog/actions'

export default (posts, orderBy = OrderTypes.DATE_ASC, searchQuery = '') => {
  return sortPosts(filterPosts(posts, searchQuery), orderBy)
}
const sortPosts = (posts, sortBy) => {
  switch (sortBy) {
    case OrderTypes.DATE_ASC:
      return orderBy(posts, 'id', 'asc')
    case OrderTypes.DATE_DESC:
      return orderBy(posts, 'id', 'desc')
    case OrderTypes.TITLE_ASC:
      return orderBy(posts, 'title', 'asc')
    case OrderTypes.TITLE_DESC:
      return orderBy(posts, 'title', 'desc')
    default:
      return posts
  }
}
const filterPosts = (posts, searchQuery) => {
  return posts.filter(
    post =>
      post.title.toUpperCase().includes(searchQuery.toUpperCase()) ||
      post.body.toUpperCase().includes(searchQuery.toUpperCase()),
  )
}
