describe('Should access registration page and register candidate', function() {
  it('Opens register page', function() {
    cy.visit(Cypress.env('baseUrl'));
    cy.contains('Cadastro').click();
    cy.url().should('include', '/cadastro');
  });
  it('Fills name', function() {
    cy.get('input[name="name"]')
      .type('Candidato do teste funcional')
      .should('have.value', 'Candidato do teste funcional');
  });
  it('Fills birthday', function() {
    cy.get('input[name="birthday"]')
      .type('20081995')
      .should('have.value', '20/08/1995');
  });
  it('Selects gender expression', function() {
    cy.get('select[name="genderExpression"]').select('Feminina');
  });
  it('Opens sizes tab', function() {
    cy.contains('MEDIDAS').click();
  });
  it('Fills bust circumference', function() {
    cy.get('input[name="totalBustCircumference"]').type(100);
  });
  it('Fills waist circumference', function() {
    cy.get('input[name="totalWaistCircumference"]').type(100);
  });
  it('Fills hip circumference', function() {
    cy.get('input[name="totalHipCircumference"]').type(100);
  });
  it('Fills height', function() {
    cy.get('input[name="height"]').type(160);
  });
  it('Clicks on save button', function() {
    cy.contains('Salvar').click();
    cy.url().should('include', 'candidato');
    cy.url().should('match', /\bcandidato\/\b.{24}$/);
  });
});
