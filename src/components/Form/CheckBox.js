import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

const CheckBox = ({ field: { name, ...field }, form: { touched, errors }, ...props }) => (
  <FormGroup check>
    <Label check>
      <Input data-cy={props.dataCy} type="checkbox" {...field} name={name} />{' '}
      {props.label && props.label}
    </Label>
  </FormGroup>
)

export default CheckBox
