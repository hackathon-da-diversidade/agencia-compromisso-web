describe('On menu should access list page, see registered fit-models, click and be redirected to fit-model profile', function() {
  it('Opens list page', function() {
    cy.visit('http://localhost:3000');
    cy.contains('Lista').click();
    cy.url().should('include', '/lista');
  });
  it('Should contain fit-model name', function() {
    cy.get('strong[name="fitModelName"]');
  });
  it('Should contain fit-model info', function() {
    cy.get('span[name="fitModelInfo"]');
  });
  it('Should click on card and be redirected to fit-model profile', function() {
    cy.get('div[name="fitModelCard"]')
      .first()
      .click();
    cy.url().should('match', /\bmodelo\/\b.{24}$/);
  });
});
