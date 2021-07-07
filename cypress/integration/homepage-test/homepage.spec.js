Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe("The Navigation bar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("The root page is the homepage", () => {
    cy.get("[data-testid=homepage]");
  });
  it("It displays a total of five menu container", () => {
    cy.get("[data-testid=directory-container]")
      .children()
      .should("have.length", 5);
    for (var i = 0; i < 4; i++) {
      cy.get("[data-testid=menu-container]").eq(i).click();
      var text=
      cy.url().should("eq", "http://localhost:3000/")
      cy.get("[data-testid=logo-container] > .logo").click();
    }
  });
});
