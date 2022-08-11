/// <reference types="cypress" />

it("Works", () => {
  cy.visit("http://localhost:3000");

  //Change player name
  cy.findByText("Settings").click();

  cy.findByPlaceholderText("Player 1 Name:").clear().type("Player 1");
  cy.findByPlaceholderText("Player 2 Name:").clear().type("Player 2");

  cy.findByText("Save").click();

  cy.findByText("Player 1's turn").should("be.visible");

  //Reset player name
  cy.findByText("Settings").click();
  cy.findByTestId("modal-reset").click();
  cy.findByText("Red's turn").should("be.visible");
  cy.findByText("Save").click();
});
