/// <reference types="cypress" />

describe("About me page", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.visit("/about");
  });

  it("verifies heading", () => {
    cy.get("h2").should("have.length", 1);
    cy.get("h2").contains("welcome to about page");
    cy.get("h5").should("have.length", 1);
  });
});
