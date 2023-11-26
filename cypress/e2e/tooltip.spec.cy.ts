describe('tooltip', () => {
  it('open and close tooltip ticker', () => {
    cy.visit('/')
    cy.acceptTermsOfUse()

    cy.get('[data-testid="header-portfolio"] > :nth-child(2) button').click()
    cy.get('[data-testid="title"]').should('contain', 'Papel')

    cy.get('[data-testid="close-btn"] > .tremor-Button-text').click()
  })

  it('open and close tooltip price', () => {
    cy.visit('/')
    cy.acceptTermsOfUse()

    cy.get('[data-testid="header-portfolio"] > :nth-child(3) button').click()
    cy.get('[data-testid="title"]').should('contain', 'Valor Atual')

    cy.get('[data-testid="close-btn"] > .tremor-Button-text').click()
  })

  it('open and close tooltip pvp', () => {
    cy.visit('/')
    cy.acceptTermsOfUse()

    cy.get('[data-testid="header-portfolio"] > :nth-child(4) button').click()
    cy.get('[data-testid="title"]').should('contain', 'PV/P')

    cy.get('[data-testid="close-btn"] > .tremor-Button-text').click()
  })

  it('open and close tooltip dy', () => {
    cy.visit('/')
    cy.acceptTermsOfUse()

    cy.get('[data-testid="header-portfolio"] > :nth-child(5) button').click()
    cy.get('[data-testid="title"]').should('contain', 'DY 12M')

    cy.get('[data-testid="close-btn"] > .tremor-Button-text').click()
  })

  it('open and close tooltip dividens', () => {
    cy.visit('/')
    cy.acceptTermsOfUse()

    cy.get('[data-testid="header-portfolio"] > :nth-child(6) button').click()
    cy.get('[data-testid="title"]').should('contain', 'Últ. Rend.')

    cy.get('[data-testid="close-btn"] > .tremor-Button-text').click()
  })

  it('open and close tooltip dividens last 12 months', () => {
    cy.visit('/')
    cy.acceptTermsOfUse()

    cy.get('[data-testid="header-portfolio"] > :nth-child(7) button').click()
    cy.get('[data-testid="title"]').should('contain', 'Últ. Rend. 12M')

    cy.get('[data-testid="close-btn"] > .tremor-Button-text').click()
  })
})
