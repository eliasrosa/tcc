/// <reference types="cypress" />
export {}

declare global {
  namespace Cypress {
    interface Chainable {
      acceptTermsOfUse(): Chainable<any>
      addTicker(ticker: string): Chainable<any>
    }
  }
}
