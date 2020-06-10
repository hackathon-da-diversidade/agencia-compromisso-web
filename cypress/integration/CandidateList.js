describe('On menu should access list page, see registered candidates, click and be redirected to candidate profile', function() {
  it('Opens list page', function() {
    cy.visit(Cypress.env('baseUrl'));
    cy.contains('Lista').click();
    cy.url().should('include', '/lista');
  });
  it('Should contain candidate name', function() {
    cy.get('strong[name="fitModelName"]');
  });
  it('Should contain candidate info', function() {
    cy.get('span[name="fitModelInfo"]');
  });
  it('Should click on card and be redirected to candidate profile', function() {
    cy.get('div[name="fitModelCard"]')
      .first()
      .click();
    cy.url().should('match', /\candidato\/\b.{24}$/);
  });
});
