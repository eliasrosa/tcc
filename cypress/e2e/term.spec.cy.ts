describe('terms of use', () => {
  it('show modal', () => {
    cy.visit('/')
    cy.contains('Termos de uso').should('be.visible')
    cy.contains('Aceito e continuar navegando').should('be.visible')
  })

  it('accept and close modal', () => {
    cy.visit('/')
    cy.acceptTermsOfUse()
  })
})
