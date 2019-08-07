import { highlightClass } from '../../src/containers/Blog/Article'

describe('Blog', () => {
  beforeEach(() => {
    window.localStorage.setItem('isAuth', true)
  })
  it('should display all posts', function() {
    cy.server()
    cy.route('GET', 'https://jsonplaceholder.typicode.com/posts', 'fixture:blog.json').as(
      'getPosts',
    )
    cy.visit('/blog')
    cy.wait('@getPosts').then(resp => {
      const postsCount = resp.response.body.length
      cy.get('[data-cy="posts-list"]')
        .find('[data-cy="article"]')
        .its('length')
        .should('eq', postsCount)
    })
  })
  it('should filtering posts', function() {
    cy.server()
    cy.route('GET', 'https://jsonplaceholder.typicode.com/posts', 'fixture:blog.json').as(
      'getPosts',
    )
    cy.visit('/blog')
    cy.wait('@getPosts').then(resp => {
      cy.get('[data-cy="search-posts-input"]')
        .type('TestTitle')
        .then(() => {
          cy.wait(1000)
          cy.get('[data-cy="posts-list"]')
            .find('[data-cy="search_TestTitle"]')
            .its('length')
            .should('eq', 5)
          cy.get('[data-cy="posts-list"]')
            .find('[data-cy="search_TestTitle"]')
            .each(match => {
              cy.wrap(match).should('have.class', highlightClass)
            })
        })
      cy.get('[data-cy="search-posts-input"]')
        .clear()
        .type('qazxswedc')
        .then(() => {
          cy.wait(1000)
          cy.get('[data-cy="no-results-header"]').should('be.visible')
        })
      cy.get('[data-cy="search-posts-input"]')
        .clear()
        .type('TestBody')
        .then(() => {
          cy.wait(1000)
          cy.get('[data-cy="posts-list"]')
            .find('[data-cy="article"]')
            .its('length')
            .should('eq', 4)
          cy.get('[data-cy="posts-list"]')
            .find('[data-cy="search_TestBody"]')
            .each(match => {
              cy.wrap(match).should('have.class', highlightClass)
            })
        })
      cy.get('[data-cy="search-posts-input"]')
        .clear()
        .then(() => {
          cy.wait(1000)
          cy.get('[data-cy="posts-list"]')
            .find('[data-cy="article"]')
            .its('length')
            .should('eq', 10)
        })
    })
  })
})
