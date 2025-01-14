describe("One Day Sheet Creation", () => {
  beforeEach(() => {
    // Log in
    cy.login();
  });

  it("Creates a One Day Sheet", () => {
    // Navigate to One Day Sheet page
    cy.get('[id="signup-sheets"]').should("be.visible").click();

    cy.get('[data-qa-id="sus-hero-CTA-oneday"]').should("be.visible").click();

    // Validate redirection to the One Day Sheet creation page
    cy.url().should(
      "eq",
      "https://test30.evitelabs.com/signup-sheet-maker/standalone-event/create"
    );

    // Enter Title
    cy.get('[data-qa-id="sheet-title"]')
      .should("exist")
      .should("be.visible")
      .type("QA-Automation-Sheet");
    // Click When
    cy.get('[data-qa-id="sheet-when"]').should("be.visible").click();

    // Select Date
    cy.get('[data-qa-id="event-date"]')
      .should("exist")
      .should("be.visible")
      .type("12/18/2025");

    cy.get('[data-qa-id="event-date"]').should("be.visible").type("{enter}");

    //click save date
    cy.get('[data-qa-id="date-time-save"]').should("be.visible").click();

    // Click on where
    cy.get('[data-qa-id="sheet-where"]').should("be.visible").click();

    // Input Location
    cy.get('[data-qa-id="event-location"]')
      .should("exist")
      .should("be.visible")
      .type("San Francisco");

    // Input Street Address
    cy.get('[data-qa-id="event-address-street"]')
      .should("exist")
      .should("be.visible")
      .type("123 Main St");

    // Input City
    cy.get('[data-qa-id="event-address-city"]')
      .should("exist")
      .should("be.visible")
      .type("San Francisco");

    // Select California from the dropdown
    cy.get('[data-qa-id="event-address-state-wrapper"]').click();
    cy.get('[id="react-select-4-option-4"]').click();

    // Input Zip Code
    cy.get('[data-qa-id="event-address-zip"]')
      .should("exist")
      .should("be.visible")
      .type("94105");

    // Click Save Location
    cy.get('[data-qa-id="event-location-save"]').should("be.visible").click();

    // Input Volunteer Notes
    cy.get('[data-qa-id="sheet-volunteer-note"]')
      .should("exist")
      .should("be.visible")
      .type("This is a QA Automation Testing");

    // click on Organizer Contact Infomration
    cy.get('[data-qa-id="sheet-enable-organizer-contact"]')
      .should("be.visible")
      .click();
    // Input Organizer Email
    cy.get('[data-qa-id="sheet-organizer-email"]')
      .should("exist")
      .should("be.visible")
      .type("hedmon2@evitelabs.com");

    // Input Organizer Phone
    cy.get('[data-qa-id="sheet-organizer-phone"]')
      .should("exist")
      .should("be.visible")
      .type("1234567890");

    // Input whats needed
    cy.get('[data-qa-id="slot-item-item-0"]')
      .should("exist")
      .should("be.visible")
      .type("Test1");

    // Sigunups Needed 2 more
    const clicksNeeded = 2;

    Array(clicksNeeded)
      .fill()
      .forEach(() => {
        cy.get('[data-qa-id="slot-item-quantity-0-increment"]')
          .should("exist")
          .should("be.visible")
          .click();
      });

    // clicl Add another slot
    cy.get('[data-qa-id="add-new-builder-row"]')
      .should("exist")
      .should("be.visible")
      .click();

    // Input whats needed2
    cy.get('[data-qa-id="slot-item-item-1"]')
      .should("exist")
      .should("be.visible")
      .type("Test2");

    // Sigunups Needed 2 more
    const clicksNeeded2 = 4;

    Array(clicksNeeded2)
      .fill()
      .forEach(() => {
        cy.get('[data-qa-id="slot-item-quantity-1-increment"]')
          .should("exist")
          .should("be.visible")
          .click();
      });

    // Click add description
    cy.get('[data-qa-id="add-description-1"]')
      .should("exist")
      .should("be.visible")
      .click();

    // Input description
    cy.get('[data-qa-id="slot-item-description-1"]')
      .should("exist")
      .should("be.visible")
      .type("This is a QA Automation Testing");

    // Input Product Link
    cy.get('[data-qa-id="slot-item-product_link-1-url"]')
      .should("exist")
      .should("be.visible")
      .type("https://amazon.com");

    cy.wait(5000);

    // Click Publish sheet button
    cy.get('button[data-qa-id="publish-sheet-cta"]')
      .first()
      .should("exist")
      .should("be.visible")
      .click();

    // Verify the success message

    cy.get("h1.header1")
      .should("exist")
      .should("be.visible")
      .should("have.text", "Congratulations!");

    // Extract the link and save it to a file
    cy.get('[data-qa-id="sharable-link"]')
      .invoke("text")
      .then((link) => {
        // Save the link to a file
        cy.writeFile("cypress/fixtures/sharedLink.json", { url: link });
      });
  });
});
