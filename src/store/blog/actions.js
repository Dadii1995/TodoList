import {
  GET_POSTS,
  DELETE_SELECTED_POSTS,
  SELECT_POST,
  SET_POSTS_ERROR,
  SET_POSTS_LOADING,
  ORDER_BY,
  FILTER,
} from './types'
import axios from 'axios'

export const getPosts = posts => ({ type: GET_POSTS, payload: posts })
export const selectPost = postId => {
  return { type: SELECT_POST, payload: postId }
}
export const deleteSelectedPosts = posts => ({ type: DELETE_SELECTED_POSTS, payload: posts })
export const setLoading = isLoading => ({ type: SET_POSTS_LOADING, payload: isLoading })
export const setError = error => ({ type: SET_POSTS_ERROR, payload: error })
export const orderBy = sortBy => ({ type: ORDER_BY, payload: sortBy })
export const filterPost = filter => ({ type: FILTER, payload: filter })

export const getApiPosts = () => dispatch => {
  dispatch(setLoading(true))
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      dispatch(getPosts(response.data))
      dispatch(setLoading(false))
    })
    .catch(error => {
      dispatch(setError(error))
      dispatch(setLoading(false))
    })
}

export const checkPost = postId => {
  return dispatch => {
    dispatch(selectPost(postId))
  }
}

export const filterPosts = searchQuery => dispatch => {
  dispatch(setLoading(true))
  dispatch(filterPost(searchQuery))
  dispatch(setLoading(false))
}

export const sortPosts = sortBy => {
  return dispatch => {
    dispatch(setLoading(true))
    dispatch(orderBy(sortBy))
    dispatch(setLoading(false))
  }
}

export const deletePosts = posts => dispatch => dispatch(deleteSelectedPosts(posts))
export const OrderTypes = {
  DATE_ASC: 'DATE_ASC',
  DATE_DESC: 'DATE_DESC',
  TITLE_ASC: 'TITLE_ASC',
  TITLE_DESC: 'TITLE_DESC',
}
