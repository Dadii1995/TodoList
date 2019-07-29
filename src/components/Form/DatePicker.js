import React from 'react'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'

const DatePicker = ({ field: { name, ...field }, form: { touched, errors }, ...props }) => {
  return (
    <FormGroup>
      {props.label && <Label>{props.label}</Label>}
      <Input
        autoComplete="off"
        data-cy={props.dataCy}
        type="date"
        {...field}
        aria-label={props.label}
        name={name}
      />
      {errors[name] && <FormFeedback>{errors[name]}</FormFeedback>}
    </FormGroup>
  )
}

export default DatePicker
