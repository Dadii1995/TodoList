import React from 'react'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'

const TextInput = ({ field: { name, ...field }, form: { touched, errors }, ...props }) => (
  <FormGroup>
    {props.label && <Label>{props.label}</Label>}
    <Input
      autoComplete="off"
      innerRef={props.innerRef}
      type="text"
      {...field}
      aria-label={props.label}
      data-cy={props.dataCy}
      name={name}
      placeholder={props.placeholder}
    />
    {errors[name] && <FormFeedback>{errors[name]}</FormFeedback>}
  </FormGroup>
)

export default TextInput
