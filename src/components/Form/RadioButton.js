import React from 'react'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'

const RadioButton = ({
  field: { name, value, onChange, onBlur },
  form: { errors },
  id,
  label,
  ...props
}) => {
  return (
    <FormGroup check>
      <Label check>
        <Input
          checked={id === value}
          id={id}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          type="radio"
          value={id}
          {...props}
        />
        {label}
      </Label>
      {errors[name] && <FormFeedback>{errors[name]}</FormFeedback>}
    </FormGroup>
  )
}

export default RadioButton
