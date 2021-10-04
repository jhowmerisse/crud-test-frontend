# crud-test-frontend
## Aplicação desenvolvida utlizando as tecnologias:
- Frontend -> React (hooks, styled-components, axios...)
- Backend -> NodeJs, SQLite
- Docker e Docker Compose

## Para a execução do projeto:
### - executar docker-compose up na pasta raiz.
### - acesssar http://localhost:3000/developers

# Processo de desenvolvimento
- desenvolvolvimento focado no frontend, mas com implementação das rotas e retornos corretos utilizando as tecnologias acima

## Desenvolvimento frontend

- para garantir o um melhor desenpenho da página:
  - efetuar o mínimo necessário de chamadas a api
  - reduzir html, css e javascript
  - responsabilidade definidas para as requisições
    - List => listar os desenvolvedores na tela
    - Register => registrar um novo desenvolvedor (com validação nos campos)
    - Card => deletar ou editar a si próprio utilizando component register preveamente preenchido no caso de edição
    - outros componentes menores foram criados, separando melhor as responsabilidade e organização do código
    - a aplicação foi criada com components hooks e styled component garantindo o escopo e aumentando performance
    - foi utilizado axios para as chamadas a api

- para manutenabilidade e legibilidade do código:
  - o código foi criado em inglês porém com as variáveis retornadas do backend mantidas em português de acordo com documentação
  - foi pensado na componentização como descrito acima
  - foi utilizado prototipação para melhor entendimento, uso e manutenção do código
  - utilização de lint
  - houve um problema e isso impossibilitou a execução dos testes unitários - serão adicionados futuramente

- para facilidade na utilização e desenvolvimento do produto:
  - foi implementado Dockerfiles no projetos frontend e backend
  - foi adicionado Docker-compose para o gerenciamento das duas imagens

## Imagens da aplicação

### Lista de desenvolvedores

![Lista de desenvolvedores](https://github.com/jhowmerisse/crud-test-frontend/blob/main/frontend/imagens/ListDevs.PNG)

### Adicionando um desenvolvedor

![Infomações de Cadastro](https://github.com/jhowmerisse/crud-test-frontend/blob/main/frontend/imagens/AddDev.PNG)

### Edição de um desenvolvedor

![Informações de Cadastro](https://github.com/jhowmerisse/crud-test-frontend/blob/main/frontend/imagens/EditDev.PNG)

### Card

![Card](https://github.com/jhowmerisse/crud-test-frontend/blob/main/frontend/imagens/Card.PNG)
