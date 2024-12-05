describe("User Login", () => {
  it("Should display the login button", () => {
    // Start by visiting the home page
    cy.visit("/");

    // Verify the presence of the login button with the correct text
    cy.get("button").should("have.text", "Log in");

    // Clicking the "Log in" button should display the login form
    cy.contains("Log in").click();

    // Verify that we are on the correct login page by checking the URL
    cy.url().should("include", "/login");

    // Check that the login page contains the welcome message
    cy.contains("Welcome! Log in to see players").should("be.visible");

    // Fill out the email field
    cy.get('input[placeholder="Enter your email address"]')
      .type("test@example.com")
      .should("have.value", "test@example.com");

    // Fill out the password field
    cy.get('input[placeholder="Enter your password"]')
      .type("password123")
      .should("have.value", "password123");

    // Click the "Log in" button
    cy.get("button").contains("Log in").click();

    // Verify that the navigation to the players page is successful after a succesful login
    cy.url().should("include", "/project2/players");
  });
});
