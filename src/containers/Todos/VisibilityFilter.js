import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'reactstrap'

import { VisibilityFilters } from '../../store/todosFilter/actions'
import { setVisibilityFilter } from '../../store/todosFilter/actions'
import TextFilter from './TextFilter'

export const VisibilityFilter = props => {
  const buttonsConfig = [
    { displayName: 'All', callback: VisibilityFilters.SHOW_ALL },
    { displayName: 'Done', callback: VisibilityFilters.SHOW_COMPLETED },
    { displayName: 'Undone', callback: VisibilityFilters.SHOW_ACTIVE },
  ]
  return (
    <div className="mt-3">
      <TextFilter />
      {buttonsConfig.map(buttonConfig => (
        <Button
          className="ml-2 mr-2"
          color="success"
          key={buttonConfig.displayName}
          onClick={() => {
            props.setVisibilityFilter(buttonConfig.callback)
          }}
          size="lg"
        >
          {buttonConfig.displayName}
        </Button>
      ))}
    </div>
  )
}
const mapDispatchToProps = {
  setVisibilityFilter,
}
VisibilityFilter.propTypes = {
  setVisibilityFilter: PropTypes.func,
}

export default connect(
  null,
  mapDispatchToProps,
)(VisibilityFilter)
