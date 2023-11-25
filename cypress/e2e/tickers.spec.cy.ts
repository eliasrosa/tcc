describe('tickers', () => {
  it('add tickers to portfolio', () => {
    cy.visit('/')
    cy.acceptTermsOfUse()
    cy.addTicker('XPLG11')
  })

  it('remove tickers from portfolio', () => {
    cy.visit('/')
    cy.acceptTermsOfUse()
    cy.addTicker('XPLG11')

    cy.get('[data-testid="btn-remove-ticker-XPLG11"]')
      .should('be.visible')
      .click()
  })

  it('hide and show tickers', () => {
    cy.visit('/')
    cy.acceptTermsOfUse()

    cy.get('.tremor-MultiSelectBox-text').click()
    cy.get('.bg-gray-50 > .w-full').type('XPLG11')
    cy.get('.tremor-MultiSelectBoxItem-checkbox').click()
    cy.get('body').type('{esc}')

    cy.get('[data-testid="button-add-ticker"]').click()

    cy.get('[data-testid="btn-visibility-ticker-XPLG11"]')
      .should('be.visible')
      .click()

    cy.get('[data-testid="btn-visibility-ticker-XPLG11"]')
      .should('be.visible')
      .click()
  })

  it('show tickers details', () => {
    cy.visit('/')
    cy.acceptTermsOfUse()
    cy.addTicker('XPLG11')

    // ticker
    cy.get('[data-testid="row-ticker-XPLG11"] > :nth-child(2)')
      .should('be.visible')
      .should('contain', 'XPLG11')

    // price
    cy.get('[data-testid="row-ticker-XPLG11"] > :nth-child(3)')
      .should('be.visible')
      .should('contain', 'R$ 107,00')

    // pvp
    cy.get('[data-testid="row-ticker-XPLG11"] > :nth-child(4)')
      .should('be.visible')
      .should('contain', '1.05')

    // dy
    cy.get('[data-testid="row-ticker-XPLG11"] > :nth-child(5)')
      .should('be.visible')
      .should('contain', '8.5%')

    // dividend
    cy.get('[data-testid="row-ticker-XPLG11"] > :nth-child(6)')
      .should('be.visible')
      .should('contain', 'R$ 0,74')

    // sum dividend last 12 months
    cy.get('[data-testid="row-ticker-XPLG11"] > :nth-child(7)')
      .should('be.visible')
      .should('contain', 'R$ 9,10')
  })

  it('show error when ticker not found', () => {
    cy.visit('/')
    cy.acceptTermsOfUse()
    cy.addTicker('XPLG11')

    cy.addTicker('KNCA11')
    cy.get('[data-testid="row-ticker-KNCA11"]').should(
      'contain',
      'Infelizmente ocorreu um erro ao tentar carregar os dados desse ativo!',
    )
  })

  it('disable visibility button when ticker not found', () => {
    cy.visit('/')
    cy.acceptTermsOfUse()

    cy.addTicker('KNCA11')
    cy.get('[data-testid="btn-visibility-ticker-KNCA11"]').should('be.disabled')
  })

  it('remove ticker when ticker not found', () => {
    cy.visit('/')
    cy.acceptTermsOfUse()

    cy.addTicker('KNCA11')
    cy.get('[data-testid="btn-remove-ticker-KNCA11"]')
      .should('be.visible')
      .click()
  })
})
