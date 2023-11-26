describe('simulator', () => {
  it('execute simulation with successfully', () => {
    cy.visit('/simulator')
    cy.acceptTermsOfUse()

    cy.simulate()

    cy.get('[data-testid="simulator-total-invested"]')
      .should('be.visible')
      .should('contain', 'R$ 185.000,00')

    cy.get('[data-testid="simulator-total-received"]')
      .should('be.visible')
      .should('contain', 'R$ 569.588,58')

    cy.get('[data-testid="simulator-total-accumulated"]')
      .should('be.visible')
      .should('contain', 'R$ 754.588,58')
  })
})
