import React, { Component } from 'react'
import { connect } from 'react-redux'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap'

import { changePassword } from '../../store/profile/actions'
import PropTypes from 'prop-types'

class ChangePassword extends Component {
  constructor(props) {
    super(props)
    this.state = { password: props.password }
    this.passwordInput = React.createRef()
  }
  componentDidMount() {
    this.passwordInput.current.focus()
  }

  render() {
    return (
      <InputGroup>
        <Input
          data-cy="password-input"
          onChange={({ target: { value } }) => {
            this.setState(state => ({ password: value }))
          }}
          placeholder="Change Password"
          innerRef={this.passwordInput}
          type="text"
          value={this.state.password}
        />
        <InputGroupAddon addonType="prepend">
          <Button
            data-cy="save-password-button"
            onClick={() => {
              this.props.changePassword(this.state.password)
            }}
          >
            Save
          </Button>
        </InputGroupAddon>
      </InputGroup>
    )
  }
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
