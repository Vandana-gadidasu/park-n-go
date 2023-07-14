/// <reference types="cypress" />

describe("hobbies me page", () => {
  beforeEach(() => {
    cy.viewport("macbook-16");
    cy.visit("/about/hobbies");
  });

  it("verifies anchor tags", () => {
    cy.contains("a", "hobby-1").should("have.attr", "href", "/about/hobbies/0");
    cy.contains("a", "hobby-2").should("have.attr", "href", "/about/hobbies/1");
  });

  it("clicks all links", () => {
    cy.contains("a", "hobby-1").click();
    cy.location("pathname").should("eq", "/about/hobbies/0");
    cy.get("h3").contains("Watching movies");
    cy.go("back");

    cy.contains("a", "hobby-2").click();
    cy.location("pathname").should("eq", "/about/hobbies/1");
    cy.get("h3").contains("Reading books");
  });
});
