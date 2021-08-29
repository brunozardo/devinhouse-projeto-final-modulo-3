Feature: E2E Processos

    Background: Realizar Login
        Given loguei com usuário XPTO
            And estou logado

    Scenario: Criar um novo processo
        Given o token foi gerado
            And salvo a requisição de criar novo processo
            And crio um novo assunto
            And gero um novo CPF
            And crio um novo Interessado
        Given clico em criar um novo processo
        When crio um novo processo pelo front
            And clico em salvar
        Then ele deve ser salvo na base

    Scenario: Buscar o processo criado
        Given clico em filtrar processo
        When busco pelo processo criado
        Then ele deve ser exibido na tela

    Scenario: Atualizar processo criado
        Given clico em filtrar processo
            And busco pelo processo criado
        When clico em editar processo
            And edito o processo
            And clico em salvar atualização
        Then a nova descrição deve ser exibida na tela
        When o token foi gerado
            And busco pelo Processo criado
        Then ele deve estar com a descrição atualizada na base

    # Scenario: [Nao Finalizado o Desenvolvimento]Excluir processo criado
        # Given clico em filtrar processo
        #     And busco pelo processo criado
        # When clico em excluir
        # Then ele não deve estar mais na base
        #     And deleto o Assunto criado
        #     And deleto o Interessado criado

    Scenario: Deletar assuntos criados
        When deleto o Processo criado
        Then deve ser salvo a requisição no banco de novo Processo
            And deleto o Assunto criado
            And deleto o Interessado criado