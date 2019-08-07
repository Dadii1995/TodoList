import head from 'lodash/head'

describe('TodoList', function() {
  beforeEach(() => {
    cy.clearLocalStorage('todos')
    window.localStorage.setItem('isAuth', true)
  })
  it('Add todo', function() {
    cy.visit('/')
    cy.get('[data-cy="create-todo-input"]').type('Test Todos')
    cy.get('[data-cy="create-todo-button"]')
      .click()
      .then(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos'))
        expect(savedTodos).to.have.length(1)
        expect(head(savedTodos)).to.have.property('name')
        expect(head(savedTodos).name).to.equal('Test Todos')
      })
  })
  it('Show todo details', function() {
    cy.visit('/')
    cy.get('[data-cy="create-todo-input"]').type('Test Todos')
    cy.get('[data-cy="create-todo-button"]').click()
    cy.get('[data-cy="todos-list"]')
      .find('a')
      .click()
      .then(() => {
        const todo = head(JSON.parse(localStorage.getItem('todos')))
        cy.url().should('include', `/todo/${todo.id}`)
      })
  })
})
