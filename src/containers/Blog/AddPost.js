import React, { useState } from 'react'
import { Alert, Button, Card, CardBody, CardTitle, Toast, ToastBody, ToastHeader } from 'reactstrap'
import * as Yup from 'yup'
import { Field, Form, Formik } from 'formik'
import TextInput from '../../components/Form/TextInput'
import TextArea from '../../components/Form/TextArea'
import axios from 'axios'

const formSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  body: Yup.string().required('Required'),
})

const AddPost = () => {
  const [newPost, setNewPost] = useState()
  const CreatePost = async values => {
    setNewPost()
    await axios
      .post('https://jsonplaceholder.typicode.com/posts', { ...values, userId: 2 })
      .then(res => {
        setNewPost(res.data)
      })
  }
  return (
    <div className="add-post">
      <Card>
        <CardBody>
          <CardTitle>AddPost</CardTitle>
          <Formik
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                CreatePost(values)
                setSubmitting(false)
              }, 500)
            }}
            validationSchema={formSchema}
          >
            {({ isSubmitting, errors }) => (
              <Form>
                <Field component={TextInput} name="title" placeholder="Title" />
                {errors.title ? <Alert color="danger">{errors.title}</Alert> : null}
                <Field component={TextArea} name="body" placeholder="Post content" />
                {errors.body ? <Alert color="danger">{errors.body}</Alert> : null}
                <Button block color="success" disabled={isSubmitting} type="submit">
                  Add
                </Button>
              </Form>
            )}
          </Formik>
        </CardBody>
      </Card>
      {newPost && (
        <Toast className="mt-5">
          <ToastHeader>New post added</ToastHeader>
          <ToastBody>
            <p>Id: {newPost.id}</p>
            <p>Title: {newPost.title}</p>
            <p>Content: {newPost.body}</p>
            <p>UserId: {newPost.userId}</p>
          </ToastBody>
        </Toast>
      )}
    </div>
  )
}

export default AddPost
