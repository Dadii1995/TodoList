import { GET_WEATHER, SET_WEATHER_CITY, SET_WEATHER_ERROR, SET_WEATHER_LOADING } from './types'
import axios from 'axios'

export const getWeather = weather => {
  return {
    type: GET_WEATHER,
    weather,
  }
}
export const setLoading = isLoading => {
  return {
    type: SET_WEATHER_LOADING,
    payload: isLoading,
  }
}

export const setCity = city => {
  return {
    type: SET_WEATHER_CITY,
    payload: city,
  }
}

export const setError = error => {
  return {
    type: SET_WEATHER_ERROR,
    payload: error,
  }
}

export const getApiWeather = city => {
  return dispatch => {
    dispatch(setLoading(true))
    return axios
      .get(`http://api.apixu.com/v1/current.json?key=28e74991e5d647e8948103820190907&q=${city}`)
      .then(response => {
        dispatch(getWeather(response.data))
        dispatch(setLoading(false))
      })
      .catch(error => {
        dispatch(setLoading(false))
        dispatch(setError(error.message))
      })
  }
}
export const setWeatherCity = city => {
  return dispatch => {
    dispatch(setCity(city))
  }
}
