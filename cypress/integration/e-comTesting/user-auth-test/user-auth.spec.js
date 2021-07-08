

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("User authentication", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("New user signup and login successful", () => {
    //create new user every time it makes a call
    //App dosen't have a feature to remove user from database
    const user = {
      mockuseremail: 'ushertredfr@gmail.com',
      mockpassword: "1456789",
      mockusername: "weby",
    };
    cy.get("[data-testid=sign-in]").click();
    cy.get("[data-testid=display-signup]").type(user.mockusername);
    cy.get("[data-testid=email-signup]").type(user.mockuseremail)
    cy.get("[data-testid=password-signup]").type(user.mockpassword);
    cy.get("[data-testid=password-confirm-signup]").type(user.mockpassword);
    cy.get("[data-testid=button-signup]").click()
    cy.wait(2000)
    cy.get("[data-testid=sign-out]").click()
    cy.get("[data-testid=sign-in]").click()
    cy.get("[data-testid=password-signin]").type(user.mockpassword)
    cy.get("[data-testid=email-signin]").type(user.mockuseremail)
    cy.get("[data-testid=button-signin]").click()
    cy.get("[data-testid=sign-out]").click()
    
  });
  it("Existing user signin", () => {
    //create new user every time the test runs
    //App dosen't have a feature to remove user from database
    const user = {
      mockuseremail: 'user@gmail.com',
      mockpassword: "1456789",
      mockusername: "weby",
    };
    
    cy.get("[data-testid=sign-in]").click()
    cy.get("[data-testid=password-signin]").type(user.mockpassword)
    cy.get("[data-testid=email-signin]").type(user.mockuseremail)
    cy.get("[data-testid=button-signin]").click()
    cy.get("[data-testid=sign-out]")
    
  });
});
