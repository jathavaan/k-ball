/// <reference types="cypress" />

describe("Player Rating", () => {
  beforeEach(() => {
    // Set the token in the localStorage to simulate a logged-in user
    // Use the setToken custom command
    cy.setToken("102");
  });
  it("Should navigate to player profile page, give a rating, and delete it", () => {
    cy.visit("/");
    cy.contains("See players").click();
    // Visit the players page
    cy.visit("/players");
    cy.url().should("include", "/players");

    // Verify the login status in the localStorage
    cy.window().then((win) => {
      expect(win.localStorage.getItem("token")).to.eq("102");
    });
    // Click on the first player card
    cy.get("[data-testid='player-card']").first().click();

    // Verify the URL contains the player's ID (the first player alphabetically has id 607)
    cy.url().should("include", "/607");

    // Verify the player profile page is displayed
    cy.contains("Your Rating").should("be.visible");

    // Click the "Edit Player Rating" button
    cy.get('[aria-label="edit player rating"]').click();

    // Verify the rating buttons are displayed
    cy.get('[aria-label="your-attack"]').scrollIntoView().should("be.visible");

    // Give the following rating (attack: 0, defence: 5, passing: 1, intelligence: 3). Attack: 0 because he is a defender :)
    cy.get('[aria-label="your-defence"]').click("right"); // left gives 5/5 star
    cy.get('[aria-label="your-passing"]').click("left"); // right gives 1/5 star
    cy.get('[aria-label="your-intelligence"]').click(); // middle gives 3/5 star

    // Click save button to save the rating
    cy.get('[aria-label="save your player rating"]').click();

    // Verify the rating is saved by checking your profile reviews
    cy.get('[aria-label="Toggle profile view"]').click(); // Open the profile menu
    cy.contains("View my ratings").click(); // Expand "View my ratings"
    cy.contains("A. Grant").should("be.visible"); // The player we rated should be visible by name
    cy.contains("(Rating 2.25)").should("be.visible"); // The average rating we gave should be visible. (0+5+1+3)/4 = 2.25
    cy.get('[aria-label="Toggle profile view"]').click(); // Close the profile menu

    // Click the edit button to open the other rating buttons
    cy.get('[aria-label="edit player rating"]').click();

    // Click the delete button to delete the rating
    cy.get('[aria-label="delete player rating"]').click();

    // Verify the rating is deleted by checking your profile reviews
    // Open and close profile reviews dropdown so it reloads

    cy.get('[aria-label="Toggle profile view"]').click(); // Open the profile menu
    cy.contains("View my ratings").click(); // Close since it the reviews are open from last time
    cy.contains("View my ratings").click(); // Open again to reload the reviews
    cy.get('[aria-label="profile-menu-drawer"]')
      .contains("A. Grant")
      .should("not.exist"); // The player we rated should not be visible in the reviews
    cy.contains("(Rating 2.25)").should("not.exist"); // The average rating we gave should not be visible
    cy.get('[aria-label="Toggle profile view"]').click(); // Close the profile menu
  });
});
