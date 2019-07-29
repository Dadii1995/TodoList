import React, { useState } from 'react'
import { connect } from 'react-redux'

import { changePassword } from '../../store/profile/actions'
import PropTypes from 'prop-types'

const ChangePassword = props => {
  const [password, changePassword] = useState(props.password)
  return (
    <div>
      <input
        onChange={({ target: { value } }) => {
          changePassword(value)
        }}
        placeholder="Change Password"
        type="text"
        value={password}
      />
      <button
        onClick={() => {
          props.changePassword(password)
        }}
      >
        Save
      </button>
    </div>
  )
}
const mapDispatchToProps = {
  changePassword,
}
const mapStateToProps = ({ profile }) => ({
  password: profile.password,
})
ChangePassword.propTypes = {
  changePassword: PropTypes.func,
  password: PropTypes.string,
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangePassword)
