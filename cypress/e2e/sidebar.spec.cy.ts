describe('sidebar', () => {
  it('test menu link to home', () => {
    cy.visit('/simulator')
    cy.acceptTermsOfUse()

    cy.get('[href="/"][data-testid="sidebar-menu-item"]')
      .should('be.visible')
      .click()

    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })

  it('test menu link to simulator', () => {
    cy.visit('/')
    cy.acceptTermsOfUse()

    cy.get('[href="/simulator"][data-testid="sidebar-menu-item"]')
      .should('be.visible')
      .click()

    cy.url().should('eq', Cypress.config().baseUrl + '/simulator')
  })
})
