import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import withAuth from '../hocs/withAuth'
import PropTypes from 'prop-types'

const ProtectedRoute = props => {
  return props.isAuth ? (
    <Route component={props.component} path={props.path} />
  ) : (
    <Redirect to="/login" />
  )
}

ProtectedRoute.propTypes = {
  isAuth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  component: PropTypes.oneOfType([PropTypes.instanceOf(Component), PropTypes.func]),
}
export default withAuth(ProtectedRoute)
