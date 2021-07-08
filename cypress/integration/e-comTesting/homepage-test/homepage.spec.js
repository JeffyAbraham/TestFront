Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("The Navigation bar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("The root page is the homepage", () => {
    cy.get("[data-testid=homepage]");
  });

  it("Correct routing is followed and a total of 5 items are displayed", () => {
    cy.get("[data-testid=directory-container]")
      .children()
      .should("have.length", 5);
    cy.get(
      `:nth-child(1) > [data-testid=menu-content] > [data-testid=menu-container-content]`
    ).then(($el) => {
      const text = $el.text().toLocaleLowerCase();
      cy.get("[data-testid=menu-container]").eq(0).click();
      cy.url().should("eq", `http://localhost:3000/shop/${text}`);
      cy.get("[data-testid=logo-container] > .logo").click();
    });
  });
});
