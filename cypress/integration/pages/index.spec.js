context("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should contain the application title", () => {
    cy.get("h1").contains("Grades");
  });
});
