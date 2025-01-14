describe("Sign Up Sheet One Day", () => {
  it("Uses the shared link to access the sign-up sheet", () => {
    //  Load the shared link from sharedLink.json
    cy.fixture("sharedLink.json").then((data) => {
      //  Visit the link
      cy.visit(data.url);

      //  Check if the sign-up sheet is loaded
      cy.get("h1.signup-sheet__view-details__title")
        .should("be.visible")
        .and("have.text", "QA-Automation-Sheet");

      //  Click on the "Sign Up" button 1
      cy.get('button[data-qa-id="sign-up-btn"]')
        .first() // Selects the first button
        .should("be.visible")
        .and("have.text", "Sign up")
        .click();

      //  Click on the "Sign Up " button 2
      cy.get('button[data-qa-id="sign-up-btn"]')
        .eq(1) // Selects the first button
        .should("be.visible")
        .and("have.text", "Sign up")
        .click();

      //  Click on the "Sign Up " button 3
      cy.get('button[data-qa-id="signup-sheet-confirm-signups"]')
        .should("be.visible")
        .click();

      // Input your name
      cy.get('[data-qa-id="sign-up-overlay-your-name"]')
        .should("be.visible")
        .type("John Doe");

      // Input Email
      cy.get('[data-qa-id="sign-up-overlay-your-email"]')
        .should("be.visible")
        .type("hedmon100@evitelabs.com");

      // Select your slots this is a selector selec number 2
      cy.get('select[data-qa-id="item-signup-count"]')
        .first()
        .should("be.visible")
        .select("2"); // Selects the option with value="2"

      // Input comment
      cy.get('[data-qa-id="sign-up-overlay-item-comment"]')
        .first()
        .should("be.visible")
        .type("This is a QA Automation Testing");

      // Select your slots this is a selector select number 3
      cy.get('select[data-qa-id="item-signup-count"]')
        .eq(1)
        .should("be.visible")
        .select("3"); // Selects the option with value="2"

      // Input comment
      cy.get('[data-qa-id="sign-up-overlay-item-comment"]')
        .eq(1)
        .should("be.visible")
        .type("This is a QA Automation Testing2");

      // Click Save button
      cy.get('button[data-qa-id="sign-up-overlay-save-btn"]')
        .should("be.visible")
        .click();

      // Confirm Signups
      cy.contains("h1.header1", "You're all signed up!").should("be.visible");
      cy.wait(5000);
    });
  });
});
