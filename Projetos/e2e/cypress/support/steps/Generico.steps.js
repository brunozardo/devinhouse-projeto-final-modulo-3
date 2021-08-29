Given(/^o token foi gerado$/, () => {
    cy.token()
})


Given(/^loguei com usuário XPTO$/, () => {
    cy.fazer_login()
})

And(/^gero um novo CPF$/, () => {
    cy.gerar_cpf()
})