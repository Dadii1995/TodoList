import React from 'react'
import AddPost from './AddPost'
import SelectedPosts from './SelectedPosts'
import FilterAndSort from './FilterAndSortPosts'
import { connect } from 'react-redux'
import { sortPosts } from '../../store/blog/actions'

const Sidebar = props => {
  const SortPost = (values, { setSubmitting }) => {
    props.sortPosts(values.orderBy)
    setSubmitting(false)
  }

  return (
    <div className="blog__sidebar">
      <AddPost />
      <FilterAndSort sortPosts={SortPost} />
      <SelectedPosts />
    </div>
  )
}
const mapDispatchToProps = {
  sortPosts,
}

export default connect(
  undefined,
  mapDispatchToProps,
)(Sidebar)
