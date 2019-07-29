import React from 'react'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import VisibilityFilter from '../VisibilityFilter'
import sleep from '../../../utils/sleep'
import { VisibilityFilters } from '../../../store/todosFilter/actions'

jest.mock('../TextFilter', () => () => <div data-testId="textfilter">TextFilter</div>)

const getWrapper = initialStore => {
  const mockStore = configureStore()
  const store = mockStore(initialStore)
  const wrapper = renderer.create(
    <Provider store={store}>
      <VisibilityFilter />
    </Provider>,
  )
  const root = wrapper.root

  return { wrapper, root, store }
}
describe('<VisibilityFilter />', () => {
  test('renders textFilter', () => {
    const { root } = getWrapper(undefined)
    expect(root.findAllByProps({ 'data-testId': 'textfilter' })).toBeDefined()
  })
  test('renders 3 buttons', () => {
    const { root } = getWrapper(undefined)
    expect(root.findAllByType('button')).toHaveLength(3)
  })
  test('should call onClick function on every button', async () => {
    const defaultProps = {
      setVisibilityFilter: jest.fn(),
    }
    const { root, store } = getWrapper(defaultProps)
    const buttons = root.findAllByType('button')
    buttons[0].props.onClick()
    await sleep()
    buttons[1].props.onClick()
    await sleep()
    buttons[2].props.onClick()
    await sleep()
    const actions = store.getActions().filter(action => action.type === 'SET_VISIBILITY_FILTER')

    expect(actions[0].payload).toBe(VisibilityFilters.SHOW_ALL)
    expect(actions[1].payload).toBe(VisibilityFilters.SHOW_COMPLETED)
    expect(actions[2].payload).toBe(VisibilityFilters.SHOW_ACTIVE)
  })
})
