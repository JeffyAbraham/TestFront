/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  describe("The Navigation bar", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    it("displays the navigation container with 2 children", () => {
      cy.get("[data-testid=header]").children().should("have.length", 2);
    });
  
    it("it has a logo container", () => {
      cy.get("[data-testid=logo-container] > .logo");
    });
    it("Logo container when clicked redirects the user to the root page", () => {
      cy.visit("http://localhost:3000/shop");
      cy.get("[data-testid=logo-container] > .logo").click();
     
    });
    it("Toggles the cart container on click", () => {
      cy.get("[data-testid=cart-toggle]").click();
      cy.get("[data-testid=cart-dropdown]");
    });
    it("If the user is not signed in  then show the sign in button(default) and also check if correct routing is followed", () => {
      cy.get("[data-testid='sign-in']").click();
      cy.url().should("eq", "http://localhost:3000/signin");
    });
    it("The shop link takes the user to the correct route", () => {
      cy.get("[data-testid=shop-link]").click();
      cy.url().should("eq", "http://localhost:3000/shop");
    });
  });
  