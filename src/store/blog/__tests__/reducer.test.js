import reducer, { initialState } from '../reducer'
import {
  GET_POSTS,
  SET_POSTS_ERROR,
  SET_POSTS_LOADING,
  DELETE_SELECTED_POSTS,
  SELECT_POST,
} from '../types'

describe('Blog reducer', () => {
  test('should return default state', () => {
    expect(reducer(undefined, {})).toStrictEqual(initialState)
  })
  test('should return posts', () => {
    const posts = [
      {
        userId: 1,
        id: 15,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body:
          'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        userId: 1,
        id: 16,
        title: 'qui est esse',
        body:
          'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
      },
    ]
    expect(
      reducer(undefined, {
        type: GET_POSTS,
        payload: posts,
      }),
    ).toStrictEqual({ ...initialState, posts, filteredPosts: posts })
  })
  test('should set loading on true', () => {
    expect(
      reducer(initialState, {
        type: SET_POSTS_LOADING,
        payload: true,
      }),
    ).toStrictEqual({ ...initialState, isLoading: true })
  })
  test('should set errors', () => {
    const error = 'TEST ERROR'
    expect(
      reducer(initialState, {
        type: SET_POSTS_ERROR,
        payload: error,
      }),
    ).toStrictEqual({ ...initialState, error })
  })
  test('should set errors', () => {
    const error = 'TEST ERROR'
    expect(
      reducer(initialState, {
        type: SET_POSTS_ERROR,
        payload: error,
      }),
    ).toStrictEqual({ ...initialState, error })
  })
  test('should select post', () => {
    const postId = 1
    expect(
      reducer(initialState, {
        type: SELECT_POST,
        payload: postId,
      }),
    ).toStrictEqual({ ...initialState, selectedPosts: [...initialState.selectedPosts, postId] })
  })
  test('should unselect post', () => {
    const postId = 2
    expect(
      reducer(initialState, {
        type: SELECT_POST,
        payload: postId,
      }),
    ).toStrictEqual({
      ...initialState,
      selectedPosts: initialState.selectedPosts.filter(post => post !== postId),
    })
  })
  test('should delete selected posts', () => {
    expect(reducer(initialState, { type: DELETE_SELECTED_POSTS })).toStrictEqual({
      ...initialState,
      posts: initialState.posts.filter(post => !initialState.selectedPosts.includes(post.id)),
      filteredPosts: initialState.posts.filter(
        post => !initialState.selectedPosts.includes(post.id),
      ),
      selectedPosts: [],
    })
  })
})
