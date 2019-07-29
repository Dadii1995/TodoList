import React from 'react'
import renderer from 'react-test-renderer'
import { render, fireEvent, wait } from '@testing-library/react'
import CityPicker, { options } from '../CityPicker'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import _ from 'lodash'
import { initialState } from '../../../store/weather/reducer'
import SelectInput from '../../../components/Form/SelectInput'
import { setWeatherCity } from '../../../store/weather/actions'
import { GET_WEATHER, SET_WEATHER_CITY } from '../../../store/weather/types'

const getWrapper = initialStore => {
  const mockStore = configureStore()
  const store = mockStore({ weather: initialStore })
  const wrapper = renderer.create(
    <Provider store={store}>
      <CityPicker />
    </Provider>,
  )
  const root = wrapper.root
  return { root, wrapper }
}
describe('<CityPicker/>', () => {
  test('renders select with options', () => {
    const { root } = getWrapper(initialState)
    const select = root.findByProps({ component: SelectInput })
    expect(select).toBeDefined()
    expect(select.props.options).toEqual(options)
  })

  test('submit new city', async () => {
    const setCity = jest.fn()
    const mockStore = configureStore()
    const store = mockStore({ weather: initialState })

    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <CityPicker setCity={setCity} />
      </Provider>,
    )

    const firstOption = _.head(options)

    const select = getByLabelText('City')
    fireEvent.change(select, { target: { value: firstOption.value } })

    const button = getByText('Select')
    fireEvent.click(button)

    await wait(() => {
      expect(setCity.mock.calls[0][0]).toStrictEqual({ city: firstOption.label })
    })
  })
  test('setting new City', async () => {
    const dispatch = jest.fn()
    const getState = jest.fn()
    const firstOption = _.head(options).value
    await setWeatherCity(firstOption)(dispatch, getState)

    expect(dispatch).toBeCalledWith({ type: SET_WEATHER_CITY, payload: firstOption })
  })
})
