import React from 'react'
import { connect } from 'react-redux'
import { deletePosts } from '../../store/blog/actions'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const SelectedPosts = ({ selectedPosts, deletePosts }) => {
  return (
    <button
      className={classNames('delete-selected-post', { 'd-none': selectedPosts.length === 0 })}
      onClick={deletePosts}
    >
      Delete selected({selectedPosts && selectedPosts.length})
    </button>
  )
}

const mapStateToProps = ({ blog: { selectedPosts } }) => ({
  selectedPosts,
})
const mapDispatchToProps = { deletePosts }

SelectedPosts.propTypes = {
  selectedPosts: PropTypes.arrayOf(PropTypes.number),
  deletePosts: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectedPosts)
