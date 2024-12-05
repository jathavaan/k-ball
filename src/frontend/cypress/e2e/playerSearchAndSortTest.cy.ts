/// <reference types="cypress" />

describe("Player Dashboard Search and Sorting", () => {
  beforeEach(() => {
    // Set a valid token in localStorage to simulate being logged in
    cy.setToken("valid-token");

    // Visit the player dashboard
    cy.visit("/players");
  });

  it("should search for players and verify the results are correct", () => {
    // Type a search query into the search bar
    cy.get('input[placeholder="Search for name..."]')
      .type("An Byong-Jun") // Replace with the desired search query
      .should("have.value", "An Byong-Jun");

    // No need to click the search button, the search should be triggered automatically

    // Wait for the search results to load
    cy.get('[data-testid="player-card"]').should("exist");

    // Verify that the first result contains the expected name
    cy.get('[data-testid="player-card"]')
      .first()
      .find('[data-testid="player-name"]')
      .invoke("text")
      .should("contain", "An Byong-Jun");

    // Check no results scenario
    cy.get('input[placeholder="Search for name..."]')
      .clear()
      .type("InvalidName");
    cy.contains("No results").should("be.visible");
  });

  it("Should sort players by name and verify the results are correct", () => {});
});
