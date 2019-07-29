import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'

import { setTextFilter } from '../../store/todosFilter/actions'
export const TextFilter = props => {
  const [searchName, setsearchName] = useState('')
  return (
    <InputGroup className='mb-3'>
      <Input
        onChange={({ target: { value } }) => {
          setsearchName(value)
        }}
        placeholder="Filter"
        type="text"
        value={searchName}
      />
      <InputGroupAddon addonType="prepend">
        <Button
          onClick={() => {
            props.setTextFilter(searchName)
          }}
        >
          Search
        </Button>
      </InputGroupAddon>
    </InputGroup>
  )
}
const mapDispatchToProps = {
  setTextFilter,
}
TextFilter.propTypes = {
  setTextFilter: PropTypes.func,
}

export default connect(
  null,
  mapDispatchToProps,
)(TextFilter)
