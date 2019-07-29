import React from 'react'
import { Field, Form, Formik } from 'formik'
import { Alert, Button } from 'reactstrap'
import * as Yup from 'yup'

import TextInput from '../../components/Form/TextInput'
import SelectInput from '../../components/Form/SelectInput'
import TextArea from '../../components/Form/TextArea'
import CheckBox from '../../components/Form/CheckBox'

const formSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  content: Yup.string()
    .min(10, 'to short')
    .required('Required'),
  subject: Yup.string(),
  // accept: Yup.boolean()
  //   .oneOf([true], 'Must Accept Terms and Conditions')
  //   .required('Must Accept Terms and Conditions'),
})

const ContactForm = ({ onSubmit }) => {
  return (
    <Formik onSubmit={onSubmit} validationSchema={formSchema}>
      {({ isSubmitting, errors, handleSubmit }) => {
        return (
          <Form data-testid="test" onSubmit={handleSubmit}>
            <Field
              component={TextInput}
              label="E-Mail"
              name="email"
              placeholder="example@domain.com"
            />
            {errors.email ? <Alert color="danger">{errors.email}</Alert> : null}
            <Field
              component={SelectInput}
              label="Subject"
              name="subject"
              options={[
                { value: 'Technical Problems', label: 'Technical Problems' },
                { value: 'Orders', label: 'Orders' },
                { value: 'Other', label: 'Other' },
              ]}
            />
            {errors.subject ? <Alert color="danger">{errors.subject}</Alert> : null}
            <Field
              component={TextArea}
              label="Content"
              name="content"
              placeholder="Hi, blablalba"
            />
            {errors.content ? <Alert color="danger">{errors.content}</Alert> : null}
            <Field component={CheckBox} label="Accept terms" name="accept" />
            {errors.accept ? <Alert color="danger">{errors.accept}</Alert> : null}

            <Button color="warning" disabled={isSubmitting} type="submit">
              Send
            </Button>
          </Form>
        )
      }}
    </Formik>
  )
}
export default ContactForm
