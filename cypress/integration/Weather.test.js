import { options } from '../../src/containers/Weather/CityPicker'
import sample from 'lodash/sample'

describe('Weather', function() {
  it('Set city weather', () => {
    const selectedCity = sample(options).label
    cy.visit('/weather')
    cy.get('[data-cy="city-picker"]').select(selectedCity)
    cy.get('[data-cy="select-city-button"]')
      .click()
      .then(() => {
        cy.get('[data-cy="city-header"]').contains(selectedCity)
      })
  })
  it('Mock api correct response', () => {
    cy.server()
    cy.route(
      'GET',
      '/v1/current.json?key=28e74991e5d647e8948103820190907&q=*',
      'fixture:weather.json',
    ).as('getWeather')
    cy.visit('/weather')
    cy.wait('@getWeather').then(resp => {
      const responseWeather = resp.response.body
      cy.get('[data-cy="city-header"]').contains(responseWeather.location.name)
      cy.get('[data-cy="city-header"]').contains(responseWeather.location.country)
      cy.get('[data-cy="weather-icon"]')
        .should('have.attr', 'src')
        .and('equal', responseWeather.current.condition.icon)
      cy.get('[data-cy="celsius"]').contains(responseWeather.current.temp_c)
      cy.get('[data-cy="fahrenheit"]').contains(responseWeather.current.temp_f)
      cy.get('[data-cy="pressure"]').contains(responseWeather.current.pressure_mb)
      cy.get('[data-cy="humidity"]').contains(responseWeather.current.humidity)
    })
  })
})
