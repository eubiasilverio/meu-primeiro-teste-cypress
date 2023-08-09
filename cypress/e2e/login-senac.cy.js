describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.sp.senac.br/senac-araraquara')
    cy.get('.mburger').click()
    cy.get('#txtLoginNaoLogadoMob').click()
    cy.get('#login-email').type('beatris_silverio@hotmail.com')
    cy.get('#login-password').type('SenhaDaBeatris')
    cy.get('#btnLoginHeader').click()

  })
})