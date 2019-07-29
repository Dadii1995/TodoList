import { EDIT_PROFILE, CHANGE_PASSWORD } from './types'

export const initialState = JSON.parse(
  localStorage.getItem('profile') ||
    '{"firstName":"NewUser","url":"","password":"admin123","birthday":"1995-06-23"}',
) || {
  firstName: 'NewUser',
  url: '',
  password: 'admin123',
  birthday: '1995-06-23',
}
const profile = (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_PROFILE: {
      const updatedState = {
        ...state,
        ...payload,
      }
      localStorage.setItem('profile', JSON.stringify(updatedState))
      return updatedState
    }
    case CHANGE_PASSWORD: {
      const updatedState = {
        ...state,
        password: payload,
      }
      localStorage.setItem('profile', JSON.stringify(updatedState))
      return updatedState
    }
    default:
      return state
  }
}
export default profile
