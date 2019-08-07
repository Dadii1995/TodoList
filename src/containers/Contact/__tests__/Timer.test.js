import React from 'react'
import renderer from 'react-test-renderer'
import Timer from '../Timer'

describe('<Timer/>', () => {
  test('renders timer', async () => {
    const wrapper = renderer.create(<Timer />)
    const instance = wrapper.getInstance()

    const getTime = jest.fn()
    instance.getTime = getTime
    instance.componentDidMount()
    await new Promise(r => setTimeout(r, 2300))
    expect(getTime).toBeCalledTimes(3)
  })
})
