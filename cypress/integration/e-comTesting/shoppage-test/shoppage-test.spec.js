Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("The Navigation bar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/shop");
  });
  it("The Spinner loads correctly", () => {
    cy.get("[data-testid=with-spinner]");
  });
  it("If the products are shown", () => {
    cy.wait(2000);
    cy.get("[data-testid=collection-overview-container]");
  });
});
