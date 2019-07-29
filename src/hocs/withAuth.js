import React from 'react'
import { AuthContext } from '../contexts/Auth'

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => (
    <AuthContext.Consumer>
      {authProps => <WrappedComponent {...props} {...authProps} />}
    </AuthContext.Consumer>
  )

  return hocComponent
}
