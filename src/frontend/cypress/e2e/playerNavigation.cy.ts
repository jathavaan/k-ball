describe("Player Dashboard to Player Profile Navigation", () => {
  it("Should navigate from the player dashboard to the player profile page", () => {
    // Start by visiting the player dashboard page
    cy.visit("/players");

    // Check that the player card exists on the dashboard
    cy.contains("Kim Young-Gwon").should("be.visible");

    // Simulate a click on the player card
    cy.contains("Kim Young-Gwon").click();

    // Verify that we are on the correct player profile page by checking the player's name
    cy.url().should("include", "/2898");
    cy.contains("Kim Young-Gwon").should("be.visible");

    // Optionally check other elements like team, position, etc. on the profile page
    cy.contains("Ulsan Hyundai FC").should("be.visible");
    cy.contains("Defender").should("be.visible");
  });
});
