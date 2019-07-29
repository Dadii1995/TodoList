import reducer, { initialState } from '../reducer'
import { GET_WEATHER, SET_WEATHER_CITY, SET_WEATHER_ERROR, SET_WEATHER_LOADING } from '../types'

describe('Weather reducer', () => {
  test('should return default state', () => {
    expect(reducer(undefined, {})).toStrictEqual(initialState)
  })
  test('should set loading on true', () => {
    expect(
      reducer(initialState, {
        type: SET_WEATHER_LOADING,
        payload: true,
      }),
    ).toStrictEqual({ ...initialState, isLoading: true })
  })
  test('should set loading on false', () => {
    expect(
      reducer(initialState, {
        type: SET_WEATHER_LOADING,
        payload: false,
      }),
    ).toStrictEqual({ ...initialState, isLoading: false })
  })
  test('should set errors', () => {
    const error = 'TEST ERROR'
    expect(
      reducer(initialState, {
        type: SET_WEATHER_ERROR,
        payload: error,
      }),
    ).toStrictEqual({ ...initialState, error })
  })
  test('should return weather', () => {
    const weather = {
      location: {
        name: 'Warsaw',
        region: '',
        country: 'Poland',
        lat: 52.25,
        lon: 21.0,
        tz_id: 'Europe/Warsaw',
        localtime_epoch: 1562848845,
        localtime: '2019-07-11 14:40',
      },
      current: {
        last_updated_epoch: 1562847611,
        last_updated: '2019-07-11 14:20',
        temp_c: 18.0,
        temp_f: 64.4,
        is_day: 1,
        condition: {
          text: 'Partly cloudy',
          icon: '//cdn.apixu.com/weather/64x64/day/116.png',
          code: 1003,
        },
        wind_mph: 8.1,
        wind_kph: 13.0,
        wind_degree: 310,
        wind_dir: 'NW',
        pressure_mb: 1011.0,
        pressure_in: 30.3,
        precip_mm: 0.1,
        precip_in: 0.0,
        humidity: 60,
        cloud: 25,
        feelslike_c: 18.0,
        feelslike_f: 64.4,
        vis_km: 10.0,
        vis_miles: 6.0,
        uv: 5.0,
        gust_mph: 10.7,
        gust_kph: 17.3,
      },
    }
    expect(
      reducer(undefined, {
        type: GET_WEATHER,
        weather,
      }),
    ).toStrictEqual({ ...initialState, ...weather })
  })
  test('should return weather', () => {
    const city = 'Bielsko-Biala'
    expect(
      reducer(undefined, {
        type: SET_WEATHER_CITY,
        payload: city,
      }),
    ).toStrictEqual({ ...initialState, city })
  })
})
