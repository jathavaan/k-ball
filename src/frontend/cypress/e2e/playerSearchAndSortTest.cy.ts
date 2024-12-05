/// <reference types="cypress" />

describe("Player Dashboard Search and Sorting", () => {
  beforeEach(() => {
    // Set a valid token in localStorage to simulate being logged in
    cy.setToken("102");

    // Visit the player dashboard
    cy.visit("/players");
  });

  it("should search for a player and verify the results are correct", () => {
    // Type a search query into the search bar
    cy.get('input[placeholder="Search for name..."]')
      .type("An Byong-Jun")
      .should("have.value", "An Byong-Jun");

    cy.wait(2000); // Wait for the search to be triggered (and easier to see the search results in the simulation)

    // No need to click the search button, the search should be triggered automatically

    // Confirm that the search results are displayed
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
    cy.wait(2000); // Wait for the search to be triggered
    cy.contains("No results").should("be.visible");
  });

  it("Should search for letters and verify the results are correct", () => {
    // Type a search query into the search bar
    cy.get('input[placeholder="Search for name..."]')
      .type("ya")
      .should("have.value", "ya");

    cy.wait(4000); // Wait for the search to be triggered

    // Confirm that the search results are displayed
    cy.get('[data-testid="player-card"]').should("exist");

    // Check that all results contain the expected letters in the name both converted to lowercase
    cy.get('[data-testid="player-card"]')
      .find('[data-testid="player-name"]')
      .each(($el) => {
        cy.wrap($el)
          .invoke("text")
          .then((text) => {
            expect(text.toLowerCase()).to.contain("ya");
          });
      });
  });
  it("Should sort players by name and verify the results are correct", () => {
    // A. Grant should be the first player when sorting by name in ascending order (A-Z) which is the default
    cy.get('[data-testid="player-card"]')
      .first()
      .find('[data-testid="player-name"]')
      .invoke("text")
      .should("contain", "A. Grant");

    // Click the sort button multiple times to cycle through the sorting options
    cy.get('[aria-label="Sort by name descending"]').click();
    cy.get('[aria-label="Sort by name ascending"]').click();
    cy.wait(2000); // Wait for the sorting to be triggered (and easier to see the sorting results in the simulation)
    cy.get('[aria-label="Sort by name descending"]').click(); // This should sort the players in descending order (Z-A)

    // Verify that the first player is now Zeca
    cy.get('[data-testid="player-card"]')
      .first()
      .find('[data-testid="player-name"]')
      .invoke("text")
      .should("contain", "Zeca");
  });
});
