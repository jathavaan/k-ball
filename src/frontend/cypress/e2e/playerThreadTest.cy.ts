/// <reference types="cypress" />

describe("Threads", () => {
  beforeEach(() => {
    // Set a valid token in localStorage to simulate being logged in
    cy.setToken("102");

    // Visit the player dashboard
    cy.visit("/players");
  });

  it("Should visit a player profile, then create, reply, and delete a thread", () => {
    // Utility function to generate a random string under 50 characters
    const getRandomString = (length = 50) => {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
      return Array.from({ length: Math.floor(Math.random() * length) + 1 })
        .map(() =>
          characters.charAt(Math.floor(Math.random() * characters.length)),
        )
        .join("");
    };

    // Generate random title, body, and reply
    const randomTitle = getRandomString(50);
    const randomBody = getRandomString(50);
    const randomReply = getRandomString(50);

    // Search for the K-League's only North-Korean (Korea DPR) player, mr. An Byong-Jun
    cy.get('input[placeholder="Search for name..."]')
      .type("An Byong-Jun")
      .should("have.value", "An Byong-Jun");

    // Wait for the search to be triggered (and easier to see the search results in the simulation)
    cy.wait(5000);

    // Confirm that the search results are displayed
    cy.get('[data-testid="player-card"]').should("exist");

    // Click his card to go to his profile
    cy.get('[data-testid="player-card"]').first().click();

    // Confirm that we are on the correct player profile page, by finding his name and country
    cy.contains("An Byong-Jun").should("be.visible");
    cy.contains("Korea DPR").should("be.visible");

    // Create a thread
    cy.get('input[placeholder="Title*"]').type(randomTitle);
    cy.get('textarea[placeholder="Body*"]').type(randomBody);

    // Post the thread
    cy.contains("Post thread").click();

    cy.scrollTo("top");

    // Wait for the thread to appear
    cy.contains(randomTitle).should("be.visible");
    cy.contains(randomBody).should("be.visible");

    // Write a reply comment to your own thread
    cy.get('[aria-label="reply-thread"]').first().click();
    cy.get('textarea[placeholder="Share your thoughts..."]').type(randomReply);
    cy.wait(1000);
    cy.get('[aria-label="post-comment"]').first().click();
    cy.wait(1000);

    // Check that the comment is visible
    cy.get('[aria-label="thread-comment"]')
      .first()
      .within(() => {
        cy.contains(randomReply, { timeout: 5000 }).should("be.visible");
      });

    // Hide replies and check that the comment is hidden
    cy.get('[aria-label="replies"]')
      .first()
      .click()
      .within(() => {
        cy.contains(randomReply, { timeout: 5000 }).should("not.exist");
      });

    // Show replies and check that the comment is visible
    cy.get('[aria-label="replies"]').first().click();

    cy.contains(randomReply, { timeout: 5000 }).should("be.visible");

    // Delete the comment
    cy.get('[aria-label="delete-comment"]').first().click();

    // Confirm the comment is deleted
    cy.contains(randomReply).should("not.exist");

    // Delete the thread
    cy.get('[aria-label="delete-thread"]').first().click();
    // Confirm the thread is deleted
    cy.contains(randomTitle).should("not.exist");
  });
});
