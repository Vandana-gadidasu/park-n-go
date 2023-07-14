/// <reference types="cypress" />

describe("Counter App", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.visit("/");
  });

  it("displays the increased counter value on click", () => {
    cy.get(".btn.primary.increment").should("have.length", 1);
    cy.get(".btn.primary.increment").click();
    cy.get(".counter>.counter-label").contains("1");
  });

  it("displays the decreased counter value on click", () => {
    cy.get(".btn.primary.decrement").should("have.length", 1);
    cy.get(".btn.primary.increment").click();
    cy.get(".btn.primary.increment").click();
    cy.get(".btn.primary.increment").click();
    cy.get(".btn.primary.decrement").click();
    cy.get(".counter>.counter-label").contains("2");
  });

  it("displays the reset counter value on click", () => {
    cy.get(".btn.secondary.reset").should("have.length", 1);
    cy.get(".btn.primary.increment").click();
    cy.get(".btn.primary.increment").click();
    cy.get(".btn.primary.increment").click();
    cy.get(".btn.primary.increment").click();
    cy.get(".btn.secondary.reset").click();
    cy.get(".counter>.counter-label").contains("0");
  });
});
