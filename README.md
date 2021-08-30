# Projeto final de aplicação módulo 3



## Diagrama de Integrações

Abaixo observa-se um diagrama suscinto das integrações do sistema contendo as camadas de apresentação, negócio, segurança e persistência.

![image](https://github.com/brunozardo/devinhouse-projeto-final-modulo-3/blob/brunozardo/Images/Diagrama.png)


## Documentação da REST API utilizando Swagger

Esta API REST tem como objetivo auxiliar na manutenção dos dados de Processos, Assuntos e Interessados no banco de dados e prover integração com o FrontEnd do sistema. Abaixo, seguem todos os Endpoints que a API fornece, com a descrição de sua função, respectivos verbos HTTP e também com exemplos de utilização.

### Aqui está a lista de todos os Endpoints para facilitar visualização


![todosOsEndpoints](https://github.com/brunozardo/devinhouse-projeto-final-modulo-3/blob/brunozardo/Images/todosOsEndpoints.png)


<details>
<summary>Visualização detalhada de cada Endpoint clicando no dropdown</summary>
  
### Busca Um Processo Por ID

![image1](https://github.com/brunozardo/devinhouse-projeto-final-modulo-3/blob/brunozardo/Images/1Processo-controller-buscaUmProcessoPorId.png)

### Atualiza um processo pelo ID

![image2](https://github.com/brunozardo/devinhouse-projeto-final-modulo-3/blob/brunozardo/Images/2Processo-controller-atualizaUmProcessoPeloId.png)

### Deleta um Processo pelo ID

![image3](https://github.com/brunozardo/devinhouse-projeto-final-modulo-3/blob/brunozardo/Images/3Processo-controller-deletaUmProcessoPeloId.png)

### Lista Todos os Processos

![image4](https://github.com/brunozardo/devinhouse-projeto-final-modulo-3/blob/brunozardo/Images/4Processo-controller-listaTodosOsProcessos.png)

### Cria um Processo

![image5](https://github.com/brunozardo/devinhouse-projeto-final-modulo-3/blob/brunozardo/Images/5Processo-controller-criaUmProcesso.png)

### Busca um Interessado Pelo ID

![image6](https://github.com/brunozardo/devinhouse-projeto-final-modulo-3/blob/brunozardo/Images/6Interessado-controller-buscarInteressadoPorId.png)

### Atualiza um Interessado Por ID

![image7](https://github.com/brunozardo/devinhouse-projeto-final-modulo-3/blob/brunozardo/Images/7Interessado-controller-atualizaUmInteressadoPorId.png)

### Deleta um Interessado Por ID

![image8](https://github.com/brunozardo/devinhouse-projeto-final-modulo-3/blob/brunozardo/Images/8Interessado-controller-deletaUmInteressadoPorId.png)

### Lista todos os Interessados

![image9](https://github.com/brunozardo/devinhouse-projeto-final-modulo-3/blob/brunozardo/Images/9Interessado-controller-ListaTodosOsInteressados.png)

### Cria um novo Interessado

![image10](https://github.com/brunozardo/devinhouse-projeto-final-modulo-3/blob/brunozardo/Images/10Interessado-controller-criaUmNovoInteressado.png)

### Busca Assunto por ID

![image11](https://github.com/brunozardo/devinhouse-projeto-final-modulo-3/blob/brunozardo/Images/11Assunto-controller-buscaUmAssuntoPorId.png)

### Edita um Assunto por ID

![image12](https://github.com/brunozardo/devinhouse-projeto-final-modulo-3/blob/brunozardo/Images/12Assunto-controller-editaUmAssuntoPorId.png)

### Deleta um Assunto por ID

![image13](https://github.com/brunozardo/devinhouse-projeto-final-modulo-3/blob/brunozardo/Images/13Assunto-controller-deletaUmAssuntoPorId.png)

### Lista os Assuntos

![image14](https://github.com/brunozardo/devinhouse-projeto-final-modulo-3/blob/brunozardo/Images/14Assunto-controller-listaOsAssuntos.png)

### Cria um Assunto

![image15](https://github.com/brunozardo/devinhouse-projeto-final-modulo-3/blob/brunozardo/Images/15Assunto-controller-criaUmAssunto.png)

</details>


## Executar a aplicação usando Docker :whale:

Certifique-se de que tenha o Docker instalado em sua máquina.

### Frontend e Backend com o docker-compose.yml

- Faça clone desse repositório
- Navegue para o repositório
- Utilize o comando ``docker-compose up`` para gerar as imagens e buildar as aplicacoes.


