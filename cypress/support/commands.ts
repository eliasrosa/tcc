/// <reference types="cypress" />
// ***********************************************

Cypress.Commands.add('acceptTermsOfUse' as any, () => {
  cy.contains('Aceito e continuar navegando').click()
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
