describe('Profile', function() {
  before(() => {
    cy.clearLocalStorage('profile')
  })
  beforeEach(() => {
    window.localStorage.setItem('isAuth', true)
  })
  it('Change user data', () => {
    const user = {
      firstName: 'Test User',
      birthday: '2015-07-21',
      url: 'https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg',
    }
    cy.visit('/profile/edit')
    cy.get('[data-cy="user-name-input"]')
      .clear()
      .type(user.firstName, { delay: 112 })
    cy.get('[data-cy="user-photo-input"]')
      .clear()
      .type(user.url, { delay: 0 })
    cy.get('[data-cy="user-birthday-input"]').type(user.birthday)
    cy.get('[data-cy="submit-button"]')
      .click()
      .then(() => {
        cy.url().should('equal', `${Cypress.config().baseUrl}/profile`)
        cy.get('img')
          .should('have.attr', 'src')
          .and('equal', user.url)
        cy.get('h1').contains(user.firstName)
        cy.get('h2').contains('4')
      })
  })
})
