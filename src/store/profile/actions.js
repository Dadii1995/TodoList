import { EDIT_PROFILE, CHANGE_PASSWORD } from './types'

export const editProfile = ({ firstName, url, birthday }) => {
  return {
    type: EDIT_PROFILE,
    payload: {
      firstName,
      url,
      birthday,
    },
  }
}

export const changePassword = password => ({
  type: CHANGE_PASSWORD,
  payload: password,
})
