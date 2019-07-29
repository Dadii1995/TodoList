import React from 'react'
import { ThemeContext } from '../contexts/Theme'

export default WrappedComponent => {
  const hocComponent = ({ ...props }) => (
    <ThemeContext.Consumer>
      {themeProps => <WrappedComponent {...props} {...themeProps} />}
    </ThemeContext.Consumer>
  )

  return hocComponent
}
