import React from 'react'
import withAuth from '../../hocs/withAuth'
import { Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

const LoginForm = props => {
  return props.isAuth ? (
    <Redirect to="/" />
  ) : (
    <Button
      data-cy="login-button"
      onClick={() => {
        props.logIn()
      }}
    >
      Log in
    </Button>
  )
}

export default withAuth(LoginForm)
