/// <reference types="cypress" />
// ***********************************************

Cypress.Commands.add('acceptTermsOfUse' as any, () => {
  cy.contains('Aceitar e continuar navegando').click()
  cy.contains('Termos de uso').should('not.exist')
})

Cypress.Commands.add('addTicker' as any, (ticker) => {
  cy.get('.tremor-MultiSelectBox-text').click()
  cy.get('.bg-gray-50 > .w-full').type(ticker as string)
  cy.get('.tremor-MultiSelectBoxItem-checkbox').click()
  cy.get('body').type('{esc}')

  cy.get('[data-testid="button-add-ticker"]').click()
  cy.get(`[data-testid="row-ticker-${ticker as string}"]`).should('be.visible')
})

Cypress.Commands.add('simulate' as any, () => {
  cy.get('[data-testid^="simulator-input"]').each(($el) => {
    cy.wrap($el).clear()
    const field = $el.attr('data-testid')?.replace('simulator-input-', '')

    switch (field) {
      case 'initial':
        cy.wrap($el).type('5000.00')
        break
      case 'investment':
        cy.wrap($el).type('500.00')
        break
      case 'taxes':
        cy.wrap($el).type('8.00')
        break
      case 'months':
        cy.wrap($el).type('360')
        break
    }
  })

  cy.get('[data-testid="simulator-submit"]').click()
})
