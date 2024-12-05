/// <reference types="cypress" />

describe("Player Dashboard Infinite Scrolling", () => {
  beforeEach(() => {
    // Simulate user login by setting a valid token
    cy.setToken("102");

    // Visit the player dashboard
    cy.visit("/players");
  });

  it("Should load more players when scrolling to the bottom", () => {
    // Verify that the initial set of players is loaded
    cy.get('[data-testid="player-card"]').should("have.length.greaterThan", 0);

    // Store the number of players before scrolling
    cy.get('[data-testid="player-card"]').then(($players) => {
      const initialCount = $players.length;

      // Scroll to the bottom of the page to trigger loading more players
      cy.scrollTo("bottom");

      // Wait for new players to load
      cy.wait(2000);

      // Verify that more players are loaded
      cy.get('[data-testid="player-card"]').should(
        "have.length.greaterThan",
        initialCount,
      );
    });

    // Repeat the process to test the next page of results
    cy.get('[data-testid="player-card"]').then(($players) => {
      const updatedCount = $players.length;

      // Scroll to the bottom again
      cy.scrollTo("bottom");

      // Wait for new players to load
      cy.wait(2000);

      // Verify that additional players are loaded
      cy.get('[data-testid="player-card"]').should(
        "have.length.greaterThan",
        updatedCount,
      );
    });

    cy.wait(2000);
  });
  it("Should display a scroll-to-top button when scrolling down and hide it when scrolling up", () => {
    // Scroll down to trigger the appearance of the scroll to top button
    cy.scrollTo("bottom");

    cy.wait(2000);

    // Test scroll to top button
    cy.get('[aria-label="scroll-to-top"]').click();

    // Verify that the page scrolls to the top
    cy.window().its("scrollY").should("equal", 0);

    cy.wait(2000);

    // Check that scroll to top button is removed since we are at the top
    cy.get('[aria-label="scroll-to-top"]').should("not.exist");

    // Check if searchbar and sortingbuttons are visible since we are at the top
    cy.get('input[placeholder="Search for name..."]').should("be.visible");
    cy.get('[aria-label="Sort by name descending"]').should("be.visible");
    cy.get('[aria-label="Sort by name ascending"]').should("be.visible");
  });
});
