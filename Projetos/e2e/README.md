# Testes e2e

Teste e2e desenvolvido para aplicação do Projeto `devinhouse-projeto-6`


## Features a serem testadas 


### Features Implementadas 

__BackEnd__

- CRUD Assunto
- CRUD Interessado
- CRUD Processo


## Bibliotecas utilizadas para a automação 

- [Cypress](https://www.cypress.io/): Framework para automação
- [Schema Validador](https://www.npmjs.com/package/ajv): Validar contrato das APIs
- [gerador-validador-cpf](https://www.npmjs.com/package/gerador-validador-cpf): Gera CPF aleatórios
- [cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor): Adiconar a linguagem Gherking
- [@shelex/cypress-allure-plugin](https://www.npmjs.com/package/@shelex/cypress-allure-plugin): Adicionar o Allure Report as execuções
- [allure-commandline](https://www.npmjs.com/package/allure-commandline): Possibilita utilizar comandos allure pela linha de comando
- [clean-dir](https://www.npmjs.com/package/clean-dir): Limpa o diretório informado


## Executar os cenários

- Instalar as dependencias

```
    npm install
```

- Abrir o Cypress

```
    npx cypress open
```

- Rodar os Testes em modo Headless e com arquivos de logs

```
    npm run cy:run
```

- Gerar o relatório Allure 

```
    npm run allure:generate
```

- Criar servidor e abrir relatório
necessário executar o comando de gerar relatório previamente.  

```
    npm run allure:opne
```

- Se necessário limpar a pasta de report, executar o comando abaixo:
```
    npm run clear:report
```