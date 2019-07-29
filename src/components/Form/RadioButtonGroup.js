import React from 'react'

const RadioButtonGroup = ({ value, touched, id, label, className, children }) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      {children}
    </fieldset>
  )
}

export default RadioButtonGroup
