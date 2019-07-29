import React from 'react'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'

const TextArea = ({ field: { name, ...field }, form: { touched, errors }, ...props }) => (
  <FormGroup>
    {props.label && <Label>{props.label}</Label>}
    <Input
      autoComplete="off"
      type="textarea"
      {...field}
      aria-label={props.label}
      data-cy={props.dataCy}
      name={name}
      placeholder={props.placeholder}
    />
    {errors[name] && <FormFeedback>{errors[name]}</FormFeedback>}
  </FormGroup>
)

export default TextArea
