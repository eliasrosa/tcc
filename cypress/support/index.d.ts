/// <reference types="cypress" />
export {}

declare global {
  namespace Cypress {
    interface Chainable {
      simulate(): Chainable<any>
      acceptTermsOfUse(): Chainable<any>
      addTicker(ticker: string): Chainable<any>
    }
  }
}
