describe("Grades API", () => {
  it("Confirms the total number of student grades in the shared dev mongodb", () => {
    cy.visit("http://localhost:3000");
    cy.request("GET", "api/grades").as("grades");
    cy.get("@grades").should((response) => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property("headers");
      expect(response).to.have.property("duration");
      expect(response.body).to.have.length(26);
    });
  });

  it("Confirms school name filter is working and is case-insensitive", () => {
    cy.visit("http://localhost:3000");
    cy.request("GET", "api/grades?schoolName=sas").as("grades");
    cy.get("@grades").should((response) => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property("headers");
      expect(response).to.have.property("duration");
      expect(response.body).to.have.length(8);
    });
  });
});
