/// <reference types="cypress" />

describe("personalinfo page", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.visit("/about/personalinfo");
  });

  it("verifies personalinfo", () => {
    cy.get("span").contains("20");
    cy.get("span").contains("male");
    cy.go("back");
  });
});
