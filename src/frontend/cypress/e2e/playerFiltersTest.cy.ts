/// <reference types="cypress" />

describe("Player Dashboard Filters", () => {
  beforeEach(() => {
    // Set token for authenticated access
    cy.setToken("102");

    // Visit the player dashboard
    cy.visit("/players");
  });

  it("should filter players based on selected filters", () => {
    // Select a country filter
    cy.get('[aria-describedby="country-select-filter-label"]', {
      timeout: 10000,
    }).should("be.visible");
    cy.get('[aria-describedby="country-select-filter-label"]', {
      timeout: 10000,
    })
      .should("not.be.disabled")
      .click();

    cy.get('[data-value="1"]').click();
    cy.get("body").click(); // Close dropdown

    // Select a club filter
    cy.get('[aria-label="club-select-filter-label"]').click();
    cy.get('[data-value="2"]').click();
    cy.get("body").click(); // Close dropdown

    // Select a position filter
    cy.get('[aria-label="position-select-filter-label"]').click();
    cy.get('[data-value="3"]').click();
    cy.get("body").click(); // Close dropdown

    // Click "Apply filters" button
    cy.get('button:contains("Apply filters")').click();
  });
});
