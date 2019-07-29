import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { Alert, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as Yup from 'yup'

import TextInput from '../../../components/Form/TextInput'
import DatePicker from '../../../components/Form/DatePicker'

const formSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  url: Yup.string().url('Photo url must be url'),
  birthday: Yup.date(),
})

const EditForm = props => {
  const [profile] = useState(props.profile)
  return (
    <Formik
      initialValues={{ ...profile }}
      onSubmit={props.saveProfile}
      validationSchema={formSchema}
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <Field
            component={TextInput}
            dataCy="user-name-input"
            label="First name"
            name="firstName"
          />
          {errors.firstName ? <Alert color="danger">{errors.firstName}</Alert> : null}
          <Field
            component={TextInput}
            dataCy="user-photo-input"
            label="Photo url"
            name="url"
            placeholder="http://examplewebsite.com/img/1.png"
          />
          {errors.url ? <Alert color="danger">{errors.url}</Alert> : null}

          <Field
            component={DatePicker}
            dataCy="user-birthday-input"
            label="Birthday"
            name="birthday"
          />
          {errors.birthday ? <Alert color="danger">{errors.birthday}</Alert> : null}

          <Button
            block
            color="success"
            data-cy="submit-button"
            disabled={isSubmitting}
            type="submit"
          >
            Save
          </Button>
        </Form>
      )}
    </Formik>
  )
}
EditForm.propTypes = {
  saveProfile: PropTypes.func,
  profile: PropTypes.object,
}
const mapStateToProps = ({ profile }) => ({
  profile,
})
export default connect(
  mapStateToProps,
  undefined,
)(EditForm)
