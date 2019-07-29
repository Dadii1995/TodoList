describe('Authentication', function() {
  beforeEach(() => {
    cy.clearLocalStorage('isAuth')
  })
  it('Check login button ', () => {
    cy.visit('/')
    cy.url().should('include', '/login')
    cy.get('[data-cy="login-button"]')
      .click()
      .then(() => {
        cy.url().should('equal', `${Cypress.config().baseUrl}/`)
      })
  })
  it('Redirect to login page after logout', () => {
    cy.visit('/')
    cy.get('[data-cy="login-button"]').click()
    cy.get('[data-cy="nav-blog"]')
      .click()
      .then(() => {
        cy.url().should('include', '/blog')
      })
    cy.get('[data-cy="nav-loguot-button"]')
      .click()
      .then(() => {
        cy.url().should('include', '/login')
      })
  })
  it('Check redirect to login page from all pages', () => {
    cy.visit('/')
    cy.get('[data-cy="nav-home"]')
      .click()
      .then(() => {
        cy.url().should('include', '/login')
      })
    cy.get('[data-cy="nav-profile"]')
      .click()
      .then(() => {
        cy.get('[data-cy="nav-profile-details"]')
          .click()
          .then(() => {
            cy.url().should('include', '/login')
          })
      })
    cy.get('[data-cy="nav-profile"]')
      .click()
      .then(() => {
        cy.get('[data-cy="nav-profile-edit"]')
          .click()
          .then(() => {
            cy.url().should('include', '/login')
          })
      })
    cy.get('[data-cy="nav-profile"]')
      .click()
      .then(() => {
        cy.get('[data-cy="nav-profile-change-password"]')
          .click()
          .then(() => {
            cy.url().should('include', '/login')
          })
      })
    cy.get('[data-cy="nav-blog"]')
      .click()
      .then(() => {
        cy.url().should('include', '/login')
      })
    cy.get('[data-cy="nav-weather"]')
      .click()
      .then(() => {
        cy.url().should('include', '/login')
      })
    cy.get('[data-cy="nav-contact"]')
      .click()
      .then(() => {
        cy.url().should('include', '/login')
      })
  })
  it('Check access to pages after log in', () => {
    cy.visit('/')
    cy.get('[data-cy="login-button"]').click()
    cy.get('[data-cy="nav-home"]')
      .click()
      .then(() => {
        cy.url().should('equal', `${Cypress.config().baseUrl}/`)
      })
    cy.get('[data-cy="nav-profile"]')
      .click()
      .then(() => {
        cy.get('[data-cy="nav-profile-details"]')
          .click()
          .then(() => {
            cy.url().should('equal', `${Cypress.config().baseUrl}/profile`)
          })
      })
    cy.get('[data-cy="nav-profile"]')
      .click()
      .then(() => {
        cy.get('[data-cy="nav-profile-edit"]')
          .click()
          .then(() => {
            cy.url().should('equal', `${Cypress.config().baseUrl}/profile/edit`)
          })
      })
    cy.get('[data-cy="nav-profile"]')
      .click()
      .then(() => {
        cy.get('[data-cy="nav-profile-change-password"]')
          .click()
          .then(() => {
            cy.url().should('equal', `${Cypress.config().baseUrl}/profile/changepassword`)
          })
      })
    cy.get('[data-cy="nav-blog"]')
      .click()
      .then(() => {
        cy.url().should('equal', `${Cypress.config().baseUrl}/blog`)
      })
    cy.get('[data-cy="nav-weather"]')
      .click()
      .then(() => {
        cy.url().should('equal', `${Cypress.config().baseUrl}/weather`)
      })
    cy.get('[data-cy="nav-contact"]')
      .click()
      .then(() => {
        cy.url().should('equal', `${Cypress.config().baseUrl}/contact`)
      })
  })
})
