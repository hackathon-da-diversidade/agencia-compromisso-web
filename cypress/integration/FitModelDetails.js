describe('On list page, should click on fit-model and be redirected to fit-model profile', function() {
  it('Opens list page', function() {
    cy.visit(Cypress.env('baseUrl') + '/lista');
  });
  it('Should click on card and be redirected to fit-model profile', function() {
    cy.get('div[name="fitModelCard"]')
      .first()
      .click();
    cy.url().should('match', /\bmodelo\/\b.{24}$/);
  });
  it('Should contain fit-model main-info', function() {
    cy.contains('Nome:');
    cy.contains('Idade:');
    cy.contains('Expressão de gênero:');
  });
  it('Should contain sizes', function() {
    cy.get('h1')
      .first()
      .contains('MEDIDAS');
    cy.contains('Circunferência total do busto (cm):');
    cy.contains('Circunferência total da cintura alta(cm):');
    cy.contains('Circunferência total do quadril (cm):');
    cy.contains('Altura (cm):');
  });
  it('Should contain personal information', function() {
    cy.get('h1')
      .eq(1)
      .contains('PESSOAL');
    cy.contains('Data de nascimento:');
  });
  it('Should go back to list when back button is clicked', function() {
    cy.get('.Header_Header__3VoE2')
      .find('svg')
      .click();
    cy.url().should('include', '/lista');
  });
});

describe('When screen size is mobile and fit-model has phone set, should appear contact button', function() {
  it('Should click on card and be redirected to fit-model profile', function() {
    cy.get('div[name="fitModelCard"]')
      .first()
      .click();
    cy.url().should('match', /\bmodelo\/\b.{24}$/);
  });
  it('Set screen size and find button', function() {
    cy.viewport(360, 640);
    cy.get('button').contains('Contatar');
  });
});
