import React from 'react'
import { Field, Form, Formik } from 'formik'
import { connect } from 'react-redux'
import { Button, Alert } from 'reactstrap'

import SelectInput from '../../components/Form/SelectInput'

export const options = [
  { value: 'Amsterdam', label: 'Amsterdam' },
  { value: 'Bielsko-Biala', label: 'Bielsko-Biała' },
  { value: 'Kiev', label: 'Kiev' },
  { value: 'Lisboa', label: 'Lisboa' },
  { value: 'London', label: 'London' },
  { value: 'Moscow', label: 'Moscow' },
  { value: 'nyc', label: 'New York' },
  { value: 'oakland', label: 'Oakland' },
  { value: 'Oslo', label: 'Oslo' },
  { value: 'Prague', label: 'Prague' },
  { value: 'Radom', label: 'Radom' },
  { value: 'Rio', label: 'Rio De Janeiro' },
  { value: 'Rome', label: 'Rome' },
  { value: 'Sosnowiec', label: 'Sosnowiec' },
  { value: 'Warszawa', label: 'Warszawa' },
]

const CityPicker = props => (
  <Formik initialValues={{ city: props.city }} onSubmit={props.setCity}>
    {({ isSubmitting, errors }) => {
      return (
        <Form>
          <Field
            component={SelectInput}
            dataCy="city-picker"
            label="City"
            name="city"
            options={options}
          />
          {errors.city ? <Alert color="danger">{errors.city}</Alert> : null}

          <Button
            block
            color="info"
            data-cy="select-city-button"
            disabled={isSubmitting}
            type="submit"
          >
            Select
          </Button>
        </Form>
      )
    }}
  </Formik>
)

const mapStateToProps = state => {
  return {
    city: state.weather.city,
  }
}
export default connect(
  mapStateToProps,
  undefined,
)(CityPicker)
