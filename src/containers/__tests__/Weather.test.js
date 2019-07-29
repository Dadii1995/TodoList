import React from 'react'
import { Col, Row } from 'reactstrap'
import Weather from '../Weather'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

jest.mock('../Weather/WeatherBox', () => () => <div data-testId="weatherBox">Weather Box</div>)
jest.mock('../Weather/CityPicker', () => () => <div data-testId="cityPicker">City Picker</div>)

const getWrapper = initialStore => {
  const mockStore = configureStore()
  const store = mockStore(initialStore)
  const wrapper = renderer.create(
    <Provider store={store}>
      <Weather />
    </Provider>,
  )
  const root = wrapper.root

  return { wrapper, root, store }
}
describe('<Weather/>', () => {

  test('renders row with 2 cols', () => {
    const { root } = getWrapper()
    const row = root.findByType(Row)
    expect(row).toBeDefined()
    expect(row.findAllByType(Col)).toHaveLength(2)
  })
  test('renders city picker in left column', () => {
    const { root } = getWrapper()
    const leftColumn = root.findAllByType(Col)[0]
    expect(leftColumn.findByProps({ 'data-testId': 'cityPicker' })).toBeDefined()
  })
  test('renders WeatherBox in right column', () => {
    const { root } = getWrapper()
    const rightColumn = root.findAllByType(Col)[1]
    expect(rightColumn.findByProps({ 'data-testId': 'weatherBox' })).toBeDefined()
  })
})
