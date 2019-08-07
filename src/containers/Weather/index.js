import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import WeatherBox from './WeatherBox'
import CityPicker from './CityPicker'
import { setCity } from '../../store/weather/actions'
import { connect } from 'react-redux'

export class Weather extends Component {
  _setCity = (values, { setSubmitting }) => {
    this.props.setCity(values.city)
    setSubmitting(false)
  }
  render() {
    return (
      <Container>
        <Row className="mt-3">
          <Col md="4" xs="12">
            <CityPicker setCity={this._setCity} />
          </Col>
          <Col>
            <WeatherBox />
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapDispatchtoProps = { setCity }

export default connect(
  undefined,
  mapDispatchtoProps,
)(Weather)
