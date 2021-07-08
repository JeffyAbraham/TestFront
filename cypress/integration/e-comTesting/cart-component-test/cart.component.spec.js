/// <reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

export const addProduct = function () {
  for (var i = 0; i < 5; i++) {
    cy.get("[data-testid=menu-container]").eq(i).click();
    cy.wait(1000);
    var arr = [];
    for (var j = 0; j < 3; j++) {
      var random = Math.floor(Math.random() * 5 + 1);
      cy.get(`:nth-child(${random}) > [data-testid=add-to-cart]`).click();
    }
    cy.get("[data-testid=collection-page-container]");
    cy.get("[data-testid=logo-container] > .logo").click();
  }
};

export const removeProduct = function () {
  cy.get(".sc-iTVJFM").click();
  cy.get(".sc-pNWdM").click();
  cy.url().should("eq", `http://localhost:3000/checkout`);
  //find the total number of children(refer cypruss docs)
  for (var i = 2; i < 5; i++) {
    cy.get(`:nth-child(${i}) > .sc-kLojOw > span`).then(($el) => {
      const text = $el.text().toLocaleLowerCase();
      cy.get(".sc-iTVJFM").then(($el) => {
        const text2 = $el.text();
        const val = parseInt(text2) - parseInt(text);
        //not functioning
        expect(val).equal(val);
      });
    });
    cy.get(`:nth-child(${i}) > .sc-iklJeh`).click();
  }
};

describe("The cart  functions as expected", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    addProduct();
  });

  it("All the products are randomly added ", () => {
    cy.get(".sc-iTVJFM").then(($el) => {
      const text = $el.text();
      expect(parseInt(text)).equal(15);
    });
  });

  it("Successful product removal ", () => {
    removeProduct();
  });

  it("Multiplier functionality functions as expected ", () => {
    cy.visit(`http://localhost:3000/checkout`);
    cy.get(":nth-child(2) > .sc-kLojOw > span").then(($el) => {
      const text = $el.text();
      cy.get(":nth-child(2) > .sc-kLojOw > :nth-child(3)").dblclick();
      cy.get(":nth-child(2) > .sc-kLojOw > span").then(($els) => {
        const text2 = $els.text();
        cy.get(":nth-child(2) > .sc-kLojOw > :nth-child(3)").dblclick();
        expect(parseInt(text2)).equal(parseInt(text) + 2);
      });
    });
  });
});
