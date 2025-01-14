// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

Cypress.Commands.add("login", () => {
  cy.intercept("POST", "https://test30.evitelabs.com/ajax_login").as(
    "loginRequest"
  );

  cy.visit("/");

  // Click the Sign In button
  cy.get('[data-qa-id="meganavSignInButton"]')
    .should("exist")
    .should("be.visible")
    .and("not.be.disabled")
    .click({ force: true });

  // Enter username
  cy.get('[data-qa-id="loginModalEmailInput"]')
    .should("exist")
    .should("be.visible")
    .type("hedmon2@evitelabs.com");

  // Enter password
  cy.get('[data-qa-id="loginModalPasswordInput"]')
    .should("exist")
    .should("be.visible")
    .type("123456");

  // Click the login button
  cy.get('[data-qa-id="loginModalSignInButton"]')
    .should("exist")
    .should("be.visible")
    .and("not.be.disabled")
    .click({ force: true });

  //  login API call and validate the response status is 200
  cy.wait("@loginRequest").its("response.statusCode").should("eq", 200);
});
