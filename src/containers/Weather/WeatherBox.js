import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getApiWeather } from '../../store/weather/actions'
import { Alert, Card, Spinner, Row, Col, Fade } from 'reactstrap'

class WeatherBox extends Component {
  componentDidMount() {
    this.props.getApiWeather(this.props.weather.city)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.weather.city !== this.props.weather.city
    ) {
      this.props.getApiWeather(this.props.weather.city)
    }
  }

  render() {
    const { weather } = this.props
    if (weather.isLoading) {
      return (
        <div>
          <Spinner color="primary" type="grow" />
          <Spinner color="warning" type="grow" />
          <Spinner color="primary" type="grow" />
        </div>
      )
    } else if (weather.error) {
      return <Alert color="danger">{weather.error}</Alert>
    } else {
      return (
        <Fade>
          <Card>
            <Row>
              <Col xs="9">
                <h1 data-cy="city-header">
                  {weather.location.name}, {weather.location.country}
                </h1>
                <h4 data-cy="localtime">{weather.location.localtime}</h4>
              </Col>
              <Col xs="3">
                <img alt="weather" data-cy="weather-icon" src={weather.current.condition.icon} />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <h2 data-cy="celsius">{weather.current.temp_c}°C</h2>
                <h2 data-cy="fahrenheit">{weather.current.temp_f}°F</h2>
              </Col>
              <Col>
                <h3 data-cy="pressure">{weather.current.pressure_mb}hPa</h3>
                <h3 data-cy="humidity">Humidity: {weather.current.humidity}%</h3>
              </Col>
            </Row>
          </Card>
        </Fade>
      )
    }
  }
}

WeatherBox.propTypes = {
  getApiWeather: PropTypes.func,
  weather: PropTypes.object,
}

const mapDispatchToProps = { getApiWeather }
const mapStateToProps = state => ({
  weather: state.weather,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WeatherBox)
