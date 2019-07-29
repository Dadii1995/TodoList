import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import WeatherBox from './WeatherBox'
import CityPicker from './CityPicker'
import { setCity } from '../../store/weather/actions'
import { connect } from 'react-redux'

const Weather = props => {
  const SetCity = (values, { setSubmitting }) => {
    props.setCity(values.city)
    setSubmitting(false)
  }
  return (
    <Container>
      <Row className="mt-3">
        <Col md="4" xs="12">
          <CityPicker setCity={SetCity} />
        </Col>
        <Col>
          <WeatherBox />
        </Col>
      </Row>
    </Container>
  )
}

const mapDispatchtoProps = { setCity }

export default connect(
  undefined,
  mapDispatchtoProps,
)(Weather)
