describe('toast', () => {
  it('show toast when add ticker', () => {
    cy.visit('/')
    cy.acceptTermsOfUse()

    cy.addTicker('XPLG11')

    const toast =
      '.Toastify .Toastify__toast-container > .Toastify__toast--success'

    cy.get(toast).should('be.visible')
    cy.get(toast).should('not.be.visible')
  })
})
