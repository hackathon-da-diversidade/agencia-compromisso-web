describe('Should access registration page and register fit model', function () {
  it('Opens register page', function () {
    cy.visit('http://localhost:3000')
    cy.contains('Cadastro').click()
    cy.url().should('include', '/cadastro')
  })
  it('Fills name', function () {
    cy.get('input[name="name"]')
      .type('Modelo de teste')
      .should('have.value', 'Modelo de teste')
  })
  it('Fills birthday', function () {
    cy.get('input[name="birthday"]')
      .type('20081995')
      .should('have.value', '20/08/1995')
  })
  it('Selects gender expression', function () {
    cy.get('select[name="genderExpression"]')
      .select('Feminina')
  })
  it('Opens sizes tab', function () {
    cy.contains('Medidas').click()
  })
  it('Fills bust circumference', function () {
    cy.get('input[name="bust"]')
      .type(100)
  })
  it('Fills waist circumference', function () {
    cy.get('input[name="waist"]')
      .type(100)
  })
  it('Fills hip circumference', function () {
    cy.get('input[name="hip"]')
      .type(100)
  })
  it('Fills height', function () {
    cy.get('input[name="height"]')
      .type(160)
  })
  it('Clicks on save button', function () {
    cy.contains('Salvar').click()
  })
})



