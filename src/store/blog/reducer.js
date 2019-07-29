import {
  GET_POSTS,
  DELETE_SELECTED_POSTS,
  SELECT_POST,
  SET_POSTS_ERROR,
  SET_POSTS_LOADING,
  ORDER_BY,
  FILTER,
} from './types'
import sortingAndFilteringPosts from '../../utils/sortingAndFilteringPosts'
import { OrderTypes } from './actions'

export const initialState = {
  posts: [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body:
        'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body:
        'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    },
    {
      userId: 1,
      id: 4,
      title: 'eum et est occaecati',
      body:
        'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
    },
    {
      userId: 1,
      id: 5,
      title: 'nesciunt quas odio',
      body:
        'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
    },
    {
      userId: 1,
      id: 6,
      title: 'dolorem eum magni eos aperiam quia',
      body:
        'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
    },
  ],
  filteredPosts: [
    {
      userId: 1,
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body:
        'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body:
        'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body:
        'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    },
    {
      userId: 1,
      id: 4,
      title: 'eum et est occaecati',
      body:
        'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
    },
    {
      userId: 1,
      id: 5,
      title: 'nesciunt quas odio',
      body:
        'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
    },
    {
      userId: 1,
      id: 6,
      title: 'dolorem eum magni eos aperiam quia',
      body:
        'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
    },
  ],
  isLoading: false,
  error: '',
  selectedPosts: [2, 3],
  orderBy: OrderTypes.DATE_ASC,
  filter: '',
}

export const blog = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        orderBy: OrderTypes.DATE_ASC,
        filter: '',
        posts: payload,
        filteredPosts: payload,
      }
    case DELETE_SELECTED_POSTS:
      return {
        ...state,
        posts: state.posts.filter(post => !state.selectedPosts.includes(post.id)),
        filteredPosts: state.filteredPosts.filter(post => !state.selectedPosts.includes(post.id)),
        selectedPosts: [],
      }
    case SELECT_POST:
      return {
        ...state,
        selectedPosts: state.selectedPosts.includes(payload)
          ? state.selectedPosts.filter(postId => payload !== postId)
          : [...state.selectedPosts, payload],
      }

    case SET_POSTS_ERROR:
      return { ...state, error: payload }
    case SET_POSTS_LOADING:
      return { ...state, isLoading: payload }
    case ORDER_BY:
      return {
        ...state,
        selectedPosts: [],
        orderBy: payload,
        filteredPosts: sortingAndFilteringPosts(state.filteredPosts, payload, ''),
      }
    case FILTER:
      return {
        ...state,
        filter: payload,
        filteredPosts: sortingAndFilteringPosts(state.posts, state.orderBy, payload),
      }
    default:
      return state
  }
}
export default blog
