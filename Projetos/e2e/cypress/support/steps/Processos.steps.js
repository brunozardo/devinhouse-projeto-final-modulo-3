import { processoPage } from '../pages/Processo.pages'

Given(/^clico em criar um novo processo$/, () => {
    processoPage.clicoCriarNovoProcesso()
})

Given(/^clico em filtrar processo$/, () => {
    processoPage.clicoFiltrarProcesso()
})

When(/^busco pelo processo criado$/, () => {
    processoPage.insiroNumeroDoProcesso()
    processoPage.clicoBuscoNumeroProcesso()
})

When(/^clico em editar processo$/, () => {
    processoPage.clicoEmEditarProcesso()
})

When(/^crio um novo processo pelo front$/, () => {
    processoPage.insiroOrgao()
    processoPage.insiroAno()
    processoPage.insiroDescricao()
    processoPage.buscoAssuntoCriado()
    processoPage.buscoInteressadoCriado()
})

Then(/^ele deve ser exibido na tela$/, () => {
    processoPage.validarExibicaoDoProcessoProcurado()
})

And(/^edito o processo$/, () => {
    processoPage.atualizoDescricaoDoProcesso()
})

And(/^clico em salvar atualização$/, () => {
    processoPage.salvarAtualizacaoDaDescricao()
})

And(/^clico em salvar$/, () => {
    processoPage.clicarSalvarNovoProcesso()
})

And(/^salvo a requisição de criar novo processo$/, () => {
    processoPage.interceptarRequestCriarProcesso()
})

Then(/^a nova descrição deve ser exibida na tela$/, () => {
    processoPage.validarDescricaoAtualizada()
})

Then(/^ele deve ser salvo na base$/, () => {
    processoPage.capturoIdDoProcessoCriado()
})