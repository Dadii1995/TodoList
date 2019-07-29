import React from 'react'
import { getApiWeather } from '../../../store/weather/actions'
import { GET_WEATHER, SET_WEATHER_ERROR, SET_WEATHER_LOADING } from '../../../store/weather/types'

describe('<WeatherBox/>', () => {
  test('Get weather for Bielsko-Biala', async () => {
    const dispatch = jest.fn()
    const getState = jest.fn()
    await getApiWeather('Bielsko-Biala')(dispatch, getState)

    expect(dispatch).toBeCalledWith({ type: GET_WEATHER, weather: [] })
    expect(dispatch).toBeCalledWith({ type: SET_WEATHER_LOADING, payload: false })
    expect(dispatch).toBeCalledWith({ type: SET_WEATHER_LOADING, payload: true })
    expect(dispatch).not.toBeCalledWith({ type: SET_WEATHER_ERROR, payload: true })
    expect(dispatch).not.toBeCalledWith({ type: SET_WEATHER_ERROR, payload: false })
  })
})
