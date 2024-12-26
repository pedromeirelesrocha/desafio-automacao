# DESAFIO DE AUTOMAÇÃO - CYPRESS AUTOMATION
_Este é o meu projeto de automação para a aplicação Automation Exercise, um site estruturado para testes de Compras, minha automação foi desenvolvida com o objetivo de validar algumas das funcionalidades principais do sistema, como login e de integração do carrinho de compras._

Este projeto utiliza o Cypress para automatizar os testes. Cypress é um framework de testes end-to-end baseado em JavaScript, que permite aos desenvolvedores escrever testes e executá-los em navegadores reais.

## Funcionalidades Automatizadas
**Automatizei os seguintes cenários:**

1. Login com Credenciais Inválidas

2. Login com Credenciais Válidas

3. Busca por Produto

4. Inclusão e validação do produto no carrinho

5. Finalizando compra


## Como Executar o Projeto
### Pré-requisitos
Antes de começar, certifique-se de ter instalado:
+ [Node.js](https://nodejs.org/pt)
+ [GitBash](https://git-scm.com/downloads)
  
**Observação:** Caso não tenha um navegador instalado em sua maquina local, o Cypress utilizará o Electron por padrão para executar a automação.


### Passos para Instalação

1. **Clone o repositório** para sua máquina local:
```bash
git clone https://github.com/pedromeirelesrocha/desafio-automacao.git
```

3. **Acesse o diretório do projeto.** O diretório pode ser escolhido de acordo com o local onde você clonou o repositório:
```bash
cd caminho/para/o/diretorio/desafio-automacao
```

4. **Instale as dependências** do projeto:
```bash
npm install
```

## Executando o Cypress para rodar os testes:
   
```bash
# Você executa através da interface do Cypress (Cypress UI).
npx cypress open

# Execute o comando de automação no terminal.
npx cypress run
```

Grato!
