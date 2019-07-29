import React from 'react'
import PropTypes from 'prop-types'
import { LIGHT, DARK } from '../../contexts/Theme'
import withTheme from '../../hocs/withTheme'
import { Field, Form, Formik } from 'formik'
import RadioButton from '../../components/Form/RadioButton'
import { Button } from 'reactstrap'
import RadioButtonGroup from '../../components/Form/RadioButtonGroup'

const ThemeSelector = props => {
  const initialState = localStorage.getItem('theme') || LIGHT
  return (
    <Formik initialValues={{ theme: initialState }} onSubmit={props.onSubmit}>
      {({ isSubmitting, handleSubmit, values }) => {
        return (
          <Form onSubmin={handleSubmit}>
            <RadioButtonGroup id="theme" label="Choose theme" value={values.theme}>
              <Field component={RadioButton} id={DARK} label={DARK} name="theme" />
              <Field component={RadioButton} id={LIGHT} label={LIGHT} name="theme" />
            </RadioButtonGroup>
            <Button color="info" disabled={isSubmitting} type="submit">
              Save
            </Button>
          </Form>
        )
      }}
    </Formik>
  )
}
ThemeSelector.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
export default withTheme(ThemeSelector)
