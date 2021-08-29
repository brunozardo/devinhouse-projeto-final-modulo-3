const interessado = require('../../fixtures/Interessado.json')
const url = require('../../fixtures/url.json')

Cypress.Commands.add('interessado', () => {
    cy.request({
        method: 'GET',
        url: `${url.baseAPIUrl}/interessados`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Cypress.env('token')}`,
        }
    }).then(response => {
        return cy.wrap(response.body)
    }).as('interessado')
})

Cypress.Commands.add('criar_interessado', () => {
    cy.request({
        method: 'POST',
        url: `${url.baseAPIUrl}/interessados`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Cypress.env('token')}`,
        },
        body: {
            "nmInteressado": interessado.nmInteressado,
            "nuIdentificacao": Cypress.env('CPF'),
            "dtNascimento": interessado.dtNascimento
        }
    }).then(response => {
        expect(response.status).to.be.eq(201)
    }).then(response => {
        Cypress.env("id_Interessado_criado", response.body.id)
        return cy.wrap(response.body)
    }).as('criar_interessado')
})

Cypress.Commands.add('update_interessado', () => {
    cy.request({
        method: 'PUT',
        url: `${url.baseAPIUrl}/interessados/${Cypress.env('id_Interessado_criado')}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Cypress.env('token')}`,
        },
        body: {
            "nmInteressado": interessado.nome_interessado_atualizado
        }
    }).then(response => {
        expect(response.status).to.be.eq(204)
    }).then(response => {
        return cy.wrap(response)
    }).as('update_interessado')
})

Cypress.Commands.add('delete_interessado', () => {
    cy.request({
        method: 'DELETE',
        url: `${url.baseAPIUrl}/interessados/${Cypress.env('id_Interessado_criado')}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Cypress.env('token')}`,
        }
    }).then(response => {
        expect(response.status).to.be.eq(204)
    }).then(response => {
        return cy.wrap(response)
    }).as('delete_interessado')
})