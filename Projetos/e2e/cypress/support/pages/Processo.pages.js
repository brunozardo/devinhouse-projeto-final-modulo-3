import { processoElements } from '../elements/Processo.elements'
const dadosProcessos = require('../../fixtures/Processos.json')
const dadosAssunto = require('../../fixtures/Assuntos.json')
const dadosInteressado = require('../../fixtures/Interessado.json')

class ProcessoPage {

    clicoCriarNovoProcesso() {
        cy.get('button')
            .find('span')
            .contains('NOVO')
            .click()
    }

    clicoFiltrarProcesso() {
        cy.get('button')
            .find('span')
            .contains('Filtrar')
            .click()
    }

    insiroNumeroDoProcesso() {
        cy.get(processoElements.btnFilstrarProcesso()).should('be.visible')
            .type(`${Cypress.env('id_processo_criado')}`)
            .type('{enter}')
    }

    clicoBuscoNumeroProcesso() {
        cy.get(processoElements.btnBuscar()).should('be.visible').click()

    }

    validarBuscaProcesso() {
        cy.get(processoElements.tituloBuscaProcesso())
            .should('be.visible')
            .contains(`${Cypress.env('id_processo_criado')}`)
    }

    clicoEmEditarProcesso() {
        cy.get(processoElements.btnEditarProcesso())
            .should('be.visible')
            .click()
    }

    validoTelaDeEditarProcesso() {
        cy.get(processoElements.tituloTelaEdicao())
            .should('be.visible')
            .contains(`Alterando processo: ${Cypress.env('id_processo_criado')}`)
    }

    validarExibicaoDoProcessoProcurado() {
        cy.get(processoElements.campoIdProcesso())
            .should('be.visible')
            .contains(`${Cypress.env('id_processo_criado')}`)
    }

    atualizoDescricaoDoProcesso() {
        cy.get(processoElements.inputEditarDescricaoProcesso())
            .should('be.visible')
            .clear()
            .type(dadosProcessos.descricao_update_processo)
    }

    salvarAtualizacaoDaDescricao() {
        cy.get(processoElements.btnSalvarAtualizacao())
            .should('be.visible')
            .click()
    }

    validarDescricaoAtualizada() {
        cy.get(processoElements.descricaoCardProcessp())
            .should('be.visible')
            .contains(dadosProcessos.descricao_update_processo)
    }

    insiroOrgao() {
        cy.get(processoElements.inputOrgao())
            .should('be.visible')
            .type(dadosProcessos.sgOrgaoSetor)
    }

    insiroAno() {
        cy.get(processoElements.inputAno())
            .should('be.visible')
            .type(dadosProcessos.nuAno)
    }

    insiroDescricao() {
        cy.get(processoElements.inputDescricao())
            .should('be.visible')
            .type(dadosProcessos.descricao)
    }

    buscoAssuntoCriado() {
        cy.get(processoElements.inputAssunto())
            .should('be.visible')
            .click()
        cy.get('#menu- ul')
            .should('be.visible')
            .find('li')
            .contains(dadosAssunto.descricao_novo_assunto)
            .click()
    }

    buscoInteressadoCriado() {
        cy.get(processoElements.inputInteressado())
            .should('be.visible')
            .click()
        cy.get('#menu- ul')
            .should('be.visible')
            .find('li')
            .contains(dadosInteressado.nmInteressado)
            .click()
    }

    clicarSalvarNovoProcesso() {
        cy.get(processoElements.btnSalvarProcesso())
            .should('be.visible')
            .click()
    }

    interceptarRequestCriarProcesso() {
        cy.intercept('POST', '**/processos').as('criar_processo')
    }

    capturoIdDoProcessoCriado() {
        cy.wait('@criar_processo').then((interception) => {
            Cypress.env('id_processo_criado', interception.response.body.id)
        })
    }
}

export const processoPage = new ProcessoPage();