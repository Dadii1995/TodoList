import { GET_WEATHER, SET_WEATHER_LOADING, SET_WEATHER_ERROR, SET_WEATHER_CITY } from './types'

export const initialState = {
  current: { condition: {} },
  location: {},
  isLoading: false,
  error: '',
  city: 'Bielsko-Biala',
}

export const weather = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER: {
      return { ...state, ...action.weather }
    }
    case SET_WEATHER_CITY: {
      return { ...state, city: action.payload }
    }
    case SET_WEATHER_LOADING: {
      return { ...state, isLoading: action.payload }
    }
    case SET_WEATHER_ERROR: {
      return { ...state, error: action.payload }
    }
    default:
      return state
  }
}
export default weather
