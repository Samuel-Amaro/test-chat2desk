# Chat2Desk - Teste Técnico de Front-End Developer

## Descrição do Projeto

Este projeto é uma aplicação simples desenvolvida com Next.js e React para a visualização de uma lista de contatos e seus detalhes. A aplicação integra-se com a API pública JSONPlaceholder para buscar os dados dos contatos e implementa um fluxo de autenticação básico utilizando Basic Auth HTTP.

## Funcionalidades Implementadas

### 1. Autenticação

- **Fluxo de Autenticação**: Foi implementado um sistema de autenticação usando Basic Auth HTTP. As credenciais de login estão estáticas no código.
- **Credenciais de Acesso:**
  - **Usuário**: `user`
  - **Senha**: `pass`
- **Persistência da Sessão:** As informações de login são mantidas ativas enquanto o navegador estiver aberto. Se o navegador for fechado, será necessário realizar o login novamente. No entanto, fechar as guias do aplicativo não requer uma nova autenticação.

### 2. Páginas e Rotas

- **Página Inicial (Login)**:

  - A tela inicial da aplicação é o modal de login fornecido pelo browser, onde o usuário deve informar as credenciais para acessar o sistema.

- **Página Home (Lista de Contatos):**

  - Após o login, a página home é exibida, com uma lista de contatos obtidos da API `https://jsonplaceholder.typicode.com/users.`
  - Cada contato mostra o nome, e-mail, e uma miniatura da foto. Se a foto não estiver disponível, as iniciais do nome do contato são exibidas.

- **Página de Detalhes do Contato:**
  - Ao clicar em um contato, o usuário é redirecionado para a página de detalhes (rota `/contact/[id]`), onde informações adicionais sobre o contato são exibidas.
  - A página de detalhes utiliza o endpoint `https://jsonplaceholder.typicode.com/users/{id}` para buscar as informações específicas de cada contato.

### 3. Integração com API

- **API Pública:** A aplicação faz chamadas à API pública `JSONPlaceholder`.
- **Endpoints Utilizados:**
  - `/users` para obter a lista de usuários.
  - `/users/{id}` para obter os detalhes de um usuário específico.

### 4. Estilização e Responsividade

- A aplicação foi estilizada de forma simples, com foco na usabilidade e clareza.
- **Responsividade:** A interface foi projetada para ser responsiva, garantindo uma boa experiência em dispositivos de diferentes tamanhos.
- **Design:** As páginas utilizam uma paleta de cores suave e fontes claras para melhorar a legibilidade e a aparência visual.

## Dependencies

The following dependencies are required for this project:

- Next.JS App Router 14
- React 18
- TypeScript
- ESLint
- Prettier

## Como Executar o Projeto

### 1. Pré-requisitos

- Node.js instalado na máquina.
- Gerenciador de pacotes npm ou yarn.

### 2. Instalação

- Clone o repositório:

  ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
  ```

- Navegue até o diretório do projeto:

  ```bash
    cd seu-repositorio
  ```

- Instale as dependências:

  ```bash
     npm install
     # or
     yarn install
  ```

### 3. Executando a Aplicação

- Para iniciar o servidor de desenvolvimento:

```bash
  npm run dev
  # or
  yaarn dev
```

### 4. Testando a Aplicação

1. A aplicação estará disponível em http://localhost:3000.
2. Insira as credenciais de login (usuário: `user`, senha: `pass`).
3. Navegue pela lista de contatos e visualize os detalhes de cada contato.

### Considerações Finais

Este projeto foi desenvolvido como parte de um teste técnico para a posição de Front-End Developer na Chat2Desk. A implementação foca em cumprir todos os requisitos solicitados, com especial atenção à usabilidade, responsividade e integração com a API.
