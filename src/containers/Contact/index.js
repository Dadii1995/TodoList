import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import ContactForm from './ContactForm'
import withTheme from '../../hocs/withTheme'
import Timer from "./Timer";

const Contact = props => {
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values))
      setSubmitting(false)
      resetForm()
    }, 500)
  }
  return (
    <Container>
      <Row>
        <Col md="6" xs="12">
          <h1 style={{ color: props.colors.primary }}>Contact with us!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa debitis deserunt dolores
            eaque enim expedita facilis laboriosam magni maxime minus, nam, necessitatibus nisi
            nostrum quia quo rem sit soluta ullam?
          </p>
          <Timer/>
        </Col>
        <Col md="6" xs="12">
          <ContactForm onSubmit={onSubmit} />
        </Col>
      </Row>
    </Container>
  )
}

export default withTheme(Contact)
