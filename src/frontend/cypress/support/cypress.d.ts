declare namespace Cypress {
  interface Chainable {
    setToken(token: string): Chainable<void>;
  }
}
