# nx-stack-reactjs

#### Translation for: **[English](https://github.com/alisonbuss/nx-stack-reactjs/blob/master/README_LANG_EN.md)**.

# Um simples projeto Nx Monorepo, focado na Stack React.js e Next.js.

### Projeto foi Inspirado:

- **Vídeo(_[Como inicio meus apps com ReactJS? Next.js, TypeScript, ESLint e Styled Components | Code/Drops #50](https://www.youtube.com/watch?v=1nVUfZg2dSA)_) YouTube, Canal Rocketseat.**
- **Vídeo(_[Essa feature fez o Next.js ser o framework mais popular | Code/Drops #59](https://www.youtube.com/watch?v=u1kCtkVR7cE)_) YouTube, Canal Rocketseat.**
- **Vídeo(_[Como padronizar seu código React](https://www.youtube.com/watch?v=6RQjXb_BfpI)_) YouTube, Canal AlgaWorks.**
- **Vídeo(_[Criando projeto ReactJS com Typescript, Eslint e Prettier.](https://www.youtube.com/watch?v=QqY5qRnLTF8)_) YouTube, Canal luiz silva.**
- **Vídeo(_[Como configurar um projeto typescript do zero com ESLINT, PRETTIER, DOTENV, GIT e .EDITORCONFIG](https://www.youtube.com/watch?v=r2yzlFz7Ua4)_) YouTube, Canal Bruno Braga.**
- **Vídeo(_[Configurando o AntDesign dentro do projeto React (+ BONUS Formulários)](https://www.youtube.com/watch?v=VzNxjNxxnYU)_) YouTube, Canal AlgaWorks.**
- **Vídeo(_[Monorepo: Uma história de sucesso - Yann Braga)](https://www.youtube.com/watch?v=2lvPT4VyfqE)_) YouTube, Canal BrazilJS.**
- **Vídeo(_[Monorepo com Nx Workspaces)](https://www.youtube.com/watch?v=UJdM0TJbcFk)_) YouTube, Canal DevParana.**
- **Vídeo(_[Mono repo: Atualizando workspace (@angular/* e @nrwl/*) de v8 para v9 com nx migrate.)](https://www.youtube.com/watch?v=G7bW2BNv6oo)_) YouTube, Canal Guilherme Siquinelli.**
- **Vídeo(_[[Front-End] Testes - Testando sua interface com Cypress](https://www.youtube.com/watch?v=ts2FEcR1m04)_) YouTube, Canal Matheus Castiglioni.**
- **Vídeo(_[Cypress - passo a passo para criar o primeiro projeto e testes](https://www.youtube.com/watch?v=gTRMuWCp8mE)_) YouTube, Canal Agilizei.**

### Dependências de Ambiente:

- **[[NVM(Node Version Manager)](https://github.com/nvm-sh/nvm)]** 0.38.0 ou superior...
- **[[Node.js](https://nodejs.org/en/download/)] by (NVM)** 16.13.2 ou superior...
- **[[VS Code](https://code.visualstudio.com/download)]** 1.62.2 ou superior...
- **[[Docker](https://docs.docker.com/engine/docker-overview/)]** 18.09.6 ou superior...
- **[[Docker Compose](https://docs.docker.com/compose/)]** 1.24.0 ou superior...

> **Nota:**
>
> - _É necessário ter instalado as dependências citadas a cima, para que o projeto funcione._
> - _A execução desse projeto foi feita através de um **Desktop Ubuntu 20.04 LTS (Focal Fossa)**._

### Objetivo:

A ideia é fornecer um projeto de exemplo base **Monorepo**, com um ambiente de desenvolvimento todo configurando com ESLint, formatações de códigos com Prettier, teste unitários, testes End To End com Cypress, boa parte disso sendo **gerado pelo Nx CLI**.

A **Nx CLI** nos ajudará a gerar novos aplicativos/projetos **Next.js**, **React.js**, **Angular**, **Vue.js**, **bibliotecas de componentes**. Também nos ajudará na execução de um servidor web de desenvolvimento, na execução de testes unitários e testes End To End.

O Nx também pode fazer várias outras coisas importantes, como linting, formatação e geração de código e à medida em que nossa base de código cresce, é muito difícil gerenciar e entender as complexidades subjacentes. O Nx CLI elimina a maioria dessas complexidades fornecendo como ferramentas para automatizar e padronizar a geração de código.

Para o projeto de exemplo, vamos criar um projeto **React.js com TypeScript** e um projeto **Next.js com React.js e TypeScript**, e cada um desses projetos irá compor também um projeto End To End com Cypress para cada um deles.

A estrutura ficará assim:

- Apps:
  - **react-app**
  - **react-app-e2e**
  - **react-next**
  - **react-next-e2e**

E também vamos criar 2 bibliotecas, uma de compartilhamento de utilitários comuns e outra biblioteca React.js, de componentes, recursos e utilitários.

A estrutura ficará assim:

- Libs:
  - **lib-shared**
  - **lib-react**

Ao final o projeto Monorepo irá compor as seguintes tecnologias:

- **Node.js**
  - **Nx**
    - **ESLint**
    - **Prettier**
    - **EditorConfig**
    - **TypeScript**
    - **Jest**
    - **Testing Library**
    - **Cypress**
    - **Next.js**
    - **React.js**
    - **React Router**
    - **Styled Components**
    - **Ant Design**

### Documentação de apoio:

- **[Intro to Nx](https://nx.dev/getting-started/intro)**.
- **[Nx Setup](https://nx.dev/getting-started/nx-setup)**.
- **[Configuration: package.json and nx.json](https://nx.dev/configuration/packagejson)**.
- **[Configuration: project.json and nx.json](https://nx.dev/configuration/projectjson)**.
- **[Using ESLint in Nx Workspaces](https://nx.dev/guides/eslint)**.
- **[Documentação oficial do ESLint](https://eslint.org/docs/user-guide/getting-started)**.
- **[Documentação oficial do Prettier](https://prettier.io/docs/en/index.html)**.
- **[Documentação oficial do EditorConfig](https://editorconfig.org/)**.
- **[Documentação oficial do TypeScript](https://www.typescriptlang.org/docs/)**.
- **[Documentação oficial do Jest](https://jestjs.io/docs/getting-started)**.
- **[Documentação oficial do Testing Library](https://testing-library.com/docs/)**.
- **[Documentação oficial do Cypress](https://docs.cypress.io/guides/overview/why-cypress)**.
- **[Documentação oficial do Next.js](https://nextjs.org/docs/getting-started)**.
- **[Documentação oficial do React.js](https://reactjs.org/docs/getting-started.html)**.
- **[Documentação oficial do React Router](https://reactrouter.com/docs/en/v6)**.
- **[Documentação oficial do Styled Components](https://styled-components.com/docs)**.
- **[Documentação oficial do Ant Design](https://ant.design/docs/react/introduce)**.

Bom!!! Agora vamos à parte prática, vamos configurar o ambiente desktop e gerar os projetos com Nx CLI.

### Ambiente:

Primeiro certifique-se que o **VS Code** e o **Docker** estejam instalados.

Segundo!!! Certifique-se da instalação do **Node.js LTS**, na versão atual(**16.13.2**), você pode instalar o Node.js através do NVM(Node Version Manager), que é o que vamos fazer.

#### Abra o terminal do seu Linux:

```bash

# Instalar o NVM(Node Version Manager):
$ sudo wget -qO- "https://raw.githubusercontent.com/creationix/nvm/v0.38.0/install.sh" | bash;

# Instalar o Node.js pelo NVM:
# Essa é uma versão 16.13.2 do Node.js LTS
# Foi obtida em 23/01/2022:
# Atualizacao em: https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V16.md#16.13.2
$ nvm install 16.13.2
$ nvm use 16.13.2

# O Nx é um framework de compilação inteligente,
# rápido e extensível para projetos monorepo.
$ npm install -g nx

# Opcional!!!
# ESLint é uma ferramenta de análise de código estática
# para identificar padrões problemáticos encontrados no código.
$ npm install -g eslint

# LISTAR DEPENDÊNCIAS GLOBAIS
$ npm list -g


```

Agora temos o Node.js e as dependências globais devidamente instalado na máquina!!!

#### Vamos instalar as extensões de apoio no VS Code.

No terminal:

```bash

# Listar todas as extensões instalados no VS Code:
$ code --list-extensions;

# Instalar as extensões:

# ESLint
$ code --install-extension dbaeumer.vscode-eslint;

# EditorConfig for VS Code
$ code --install-extension EditorConfig.EditorConfig;

# Prettier - Code formatter
$ code --install-extension esbenp.prettier-vscode;

# Jest Runner
$ code --install-extension firsttris.vscode-jest-runner;

# Trailing Spaces
$ code --install-extension shardulm94.trailing-spaces;

# Auto Rename Tag
$ code --install-extension formulahendry.auto-rename-tag;

# vscode-icons
$ code --install-extension vscode-icons-team.vscode-icons;

```

### Criar o projeto monorepo usando o Nx CLI.

Vamos agora gerar o projeto principal Monorepo pelo Nx CLI e seus subprojetos:

- Libs:

  - **lib-shared**
  - **lib-react**

- Apps:
  - **react-app**
  - **react-app-e2e**
  - **react-next**
  - **react-next-e2e**

No terminal:

```bash

# CRIAR PROJETO NX MONOREPO:
$ npx create-nx-workspace --preset=empty --nx-cloud=false nx-stack-reactjs
$ cd ./nx-stack-reactjs

# INSTALAR OS PRINCIPAIS PLUGINS DO NX:
$ npm install --save-dev @nrwl/react
$ npm install --save-dev @nrwl/next

# CRIAR LIB COMPARTILHADA:
# Font: https://nx.dev/workspace/library
$ nx generate @nrwl/workspace:lib --setParserOptionsProject=true --name=lib-shared

# CRIAR LIB REACT.JS:
# Font: https://nx.dev/react/library
$ nx generate @nrwl/react:lib --style=styled-components --setParserOptionsProject=true --pascalCaseFiles=true --name=lib-react

# CRIAR PROJETO REACT.JS
# Font: https://nx.dev/react/application
$ nx generate @nrwl/react:app --style=styled-components --routing=true --setParserOptionsProject=true --pascalCaseFiles=true --name=react-app

# CRIAR PROJETO NEXT.JS
# Font: https://nx.dev/next/application
$ nx generate @nrwl/next:app --style=styled-components --setParserOptionsProject=true --name=react-next

# Criar arquivos:
$ echo "" > ./.eslintignore
$ echo "" > ./.vscode/settings.json

# LISTAR DEPENDÊNCIAS
$ npm list --depth=0

# ABRIR GRÁFICO DE DEPENDÊNCIAS
# Font: https://nx.dev/cli/dep-graph
$ nx dep-graph

```

# Instalando alguns pacotes necessários:

No terminal:

```bash

$ npm install --save history
$ npm install --save react-router-dom@6.2.1
$ npm install --save next-compose-plugins
$ npm install --save next-images
$ npm install --save antd;

$ npm install --save-dev @testing-library/dom
$ npm install --save-dev @testing-library/jest-dom
$ npm install --save-dev @testing-library/user-event

$ npm install --save-dev eslint-plugin-prettier
$ npm install --save-dev eslint-plugin-testing-library

```

Bom!!! Até aqui já temos nosso projeto Monorepo e seus subprojetos gerados pelo Nx CLI, muito fácil né? já temos todo um ambiente padronizado e automatizado, nosso projeto agora compõem as seguintes tecnologias:

- **Nx**
  - **ESLint**
  - **Prettier**
  - **EditorConfig**
  - **TypeScript**
  - **Jest**
  - **Testing Library**
  - **Cypress**
  - **Next.js**
  - **React.js**
  - **React Router**
  - **Styled Components**
  - **Ant Design**

Agora vamos configurar o ambiente e padronização e formatação dos códigos, pelo ESLint, Prettier e EditorConfig.

# Alterando arquivos de configurações do projeto:

Para configurar o ambiente precisamos criar e alterar alguns arquivos:

Alterar o arquivo:

- nx-stack-reactjs
  - .eslintrc.json

No terminal:

- $ gedit .eslintrc.json

```json
{
  "env": {},
  "root": true,
  "ignorePatterns": ["**/*"],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@nrwl/nx", "import", "@typescript-eslint", "prettier", "react"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "rules": {
        // Font: https://nx.dev/guides/eslint
        // Font: https://blog.nrwl.io/mastering-the-project-boundaries-in-nx-f095852f5bf4
        "@nrwl/nx/enforce-module-boundaries": [
          "error",
          {
            "allow": [],
            "allowCircularSelfDependency": true,
            "enforceBuildableLibDependency": true,
            "depConstraints": [
              {
                "sourceTag": "*",
                "onlyDependOnLibsWithTags": ["*"]
              }
            ]
          }
        ]
      }
    },
    {
      "files": ["*.ts", "*.tsx"],
      "extends": [
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:@nrwl/nx/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/eslint-recommended"
      ],
      "rules": {
        "prettier/prettier": "error",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/unbound-method": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/ban-types": [
          "warn",
          {
            "extendDefaults": true,
            "types": {
              "{}": true
            }
          }
        ],
        "@typescript-eslint/no-empty-interface": [
          "warn",
          {
            "allowSingleExtends": false
          }
        ],
        "@typescript-eslint/no-implicit-any-catch": [
          "error",
          { "allowExplicitAny": false }
        ],
        "@typescript-eslint/no-inferrable-types": [
          "off",
          {
            "ignoreParameters": true
          }
        ],
        "no-unused-vars": "warn",
        "no-console": "warn",
        "import/default": "off",
        "import/no-unresolved": "off",
        "import/no-named-as-default-member": "off"
      }
    },
    {
      "files": ["*.js", "*.jsx"],
      "extends": ["plugin:@nrwl/nx/javascript"],
      "rules": {}
    }
  ]
}
```

Alterar o arquivo:

- nx-stack-reactjs
  - libs/lib-shared/.eslintrc.json

No terminal:

- $ gedit libs/lib-shared/.eslintrc.json

```json
{
  "env": {},
  "extends": ["../../.eslintrc.json"],
  "ignorePatterns": ["!**/*"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "rules": {
        "@typescript-eslint/no-explicit-any": "warn",
        "no-console": "warn"
      },
      "parserOptions": {
        "project": ["libs/lib-shared/tsconfig.*?.json"]
      }
    },
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {}
    },
    {
      "files": ["*.js", "*.jsx"],
      "rules": {}
    }
  ]
}
```

Alterar o arquivo:

- nx-stack-reactjs
  - libs/lib-react/.eslintrc.json

No terminal:

- $ gedit libs/lib-react/.eslintrc.json

```json
{
  "env": {},
  "extends": [
    "plugin:@nrwl/nx/react",
    "plugin:@nrwl/nx/react-typescript",
    "plugin:react/recommended",
    "../../.eslintrc.json"
  ],
  "ignorePatterns": ["!**/*"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "rules": {
        "react/prop-types": "off",
        "react/jsx-indent": [2, 2],
        "react/jsx-indent-props": [2, 2],
        "react/react-in-jsx-scope": "off"
      },
      "parserOptions": {
        "project": ["libs/lib-react/tsconfig.*?.json"]
      }
    },
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {}
    },
    {
      "files": ["*.js", "*.jsx"],
      "rules": {}
    }
  ]
}
```

Alterar o arquivo:

- nx-stack-reactjs
  - apps/react-app/.eslintrc.json

No terminal:

- $ gedit apps/react-app/.eslintrc.json

```json
{
  "env": {},
  "extends": [
    "plugin:@nrwl/nx/react",
    "plugin:@nrwl/nx/react-typescript",
    "plugin:react/recommended",
    "../../.eslintrc.json"
  ],
  "ignorePatterns": ["!**/*"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "rules": {
        "react/prop-types": "off",
        "react/jsx-indent": [2, 2],
        "react/jsx-indent-props": [2, 2],
        "react/react-in-jsx-scope": "off"
      },
      "parserOptions": {
        "project": ["apps/react-app/tsconfig.*?.json"]
      }
    },
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {}
    },
    {
      "files": ["*.js", "*.jsx"],
      "rules": {}
    }
  ]
}
```

Alterar o arquivo:

- nx-stack-reactjs
  - apps/react-next/.eslintrc.json

No terminal:

- $ gedit apps/react-next/.eslintrc.json

```json
{
  "env": {
    "jest": true
  },
  "extends": [
    "plugin:@nrwl/nx/react",
    "plugin:@nrwl/nx/react-typescript",
    "plugin:react/recommended",
    "next",
    "next/core-web-vitals",
    "../../.eslintrc.json"
  ],
  "ignorePatterns": ["!**/*"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "rules": {
        "react/prop-types": "off",
        "react/jsx-indent": [2, 2],
        "react/jsx-indent-props": [2, 2],
        "react/react-in-jsx-scope": "off",
        "@next/next/google-font-display": "off",
        "@next/next/no-html-link-for-pages": ["error", "apps/react-next/pages"]
      },
      "parserOptions": {
        "project": ["apps/react-next/tsconfig(.*)?.json"]
      }
    },
    {
      "files": ["*.ts", "*.tsx"],
      "rules": {}
    },
    {
      "files": ["*.js", "*.jsx"],
      "rules": {}
    }
  ]
}
```

Alterar o arquivo:

- nx-stack-reactjs
  - .eslintignore

No terminal:

- $ gedit .eslintignore

```text
/*.js
**/*.js
node_modules
build
dist
```

Alterar o arquivo:

- nx-stack-reactjs
  - .prettierrc

No terminal:

- $ gedit .prettierrc

```json
{
  "semi": true,
  "singleQuote": true,
  "arrowParens": "avoid",
  "trailingComma": "all"
}
```

Alterar o arquivo:

- nx-stack-reactjs
  - .vscode/settings.json

No terminal:

- $ gedit .vscode/settings.json

```json
{
  "workbench.colorTheme": "Default Dark+",
  "explorer.compactFolders": false,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  },
  "prettier.configPath": ".prettierrc",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

Alterar o arquivo:

- nx-stack-reactjs
  - .vscode/extensions.json

No terminal:

- $ gedit .vscode/extensions.json

```json
{
  // List all installed extensions:
  // $ code --list-extensions;
  "recommendations": [
    // ESLint
    // $ code --install-extension dbaeumer.vscode-eslint;
    "dbaeumer.vscode-eslint",
    // EditorConfig for VS Code
    // $ code --install-extension EditorConfig.EditorConfig;
    "EditorConfig.EditorConfig",
    // Prettier - Code formatter
    // $ code --install-extension esbenp.prettier-vscode;
    "esbenp.prettier-vscode",
    // Jest Runner
    // $ code --install-extension firsttris.vscode-jest-runner;
    "firsttris.vscode-jest-runner",
    // Trailing Spaces
    // $ code --install-extension shardulm94.trailing-spaces;
    "shardulm94.trailing-spaces",
    // Auto Rename Tag
    // $ code --install-extension formulahendry.auto-rename-tag;
    "formulahendry.auto-rename-tag",
    // vscode-icons
    // $ code --install-extension vscode-icons-team.vscode-icons;
    "vscode-icons-team.vscode-icons"
  ]
}
```

Alterar o arquivo:

- nx-stack-reactjs
  - jest.config.js

No terminal:

- $ gedit jest.config.js

```javascript
const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  verbose: false,
  projects: getJestProjects(),

  //Font: https://ant.design/docs/react/use-with-create-react-app#Test-with-Jest
  transformIgnorePatterns: [
    `/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$`,
  ],
};
```

Alterar o arquivo:

- nx-stack-reactjs
  - package.json

No terminal:

- $ gedit package.json

```json
...
"scripts": {
  // react-app
  "start:app": "nx serve react-app --port=4201",
  "build:app": "nx build react-app",
  "build:app:prod": "nx build react-app --prod",
  "test:app": "nx test react-app",
  "e2e:browser:app": "nx e2e react-app-e2e --watch=true",
  "e2e:console:app": "nx e2e react-app-e2e --watch=false",
  "lint:app": "nx lint react-app --fix=false",
  // react-next
  "start:next": "nx serve react-next --port=4202",
  "build:next": "nx build react-next",
  "build:next:prod": "nx build react-next --prod",
  "test:next": "nx test react-next",
  "e2e:browser:next": "nx e2e react-next-e2e --watch=true",
  "e2e:console:next": "nx e2e react-next-e2e --watch=false",
  "lint:next": "nx lint react-next --fix=false",
  // lib-shared
  "test:lib:shared": "nx test lib-shared",
  "lint:lib:shared": "nx lint lib-shared",
  // lib-react
  "test:lib:react": "nx test lib-react",
  "lint:lib:react": "nx lint lib-react",
  // All
  "build:all": "nx run-many --target=build --all",
  "build:all:prod": "nx run-many --target=build --all --prod",
  "build:since": "nx affected --target=build",
  "test:all": "nx run-many --target=test --all",
  "test:since": "nx affected --target=test",
  "open:graph": "nx dep-graph",
  "lint": "nx workspace-lint",
  "update": "nx migrate latest",
  "help": "nx help"
},
...
```

Alterar o arquivo:

- nx-stack-reactjs
  - tsconfig.base.json

No terminal:

- $ gedit tsconfig.base.json

```json
...
"paths": {
  "@lib/shared/*": ["libs/lib-shared/src/*"],
  "@lib/shared": ["libs/lib-shared/src/index.ts"],
  "@lib/react/*": ["libs/lib-react/src/*"],
  "@lib/react": ["libs/lib-react/src/index.ts"],
  "@app/*": ["apps/react-app/src/app/*"],
  "@app/envs*": ["apps/react-app/src/environments/*"],
  "@app/assets*": ["apps/react-app/src/assets/*"],
  "@next/*": ["apps/react-next/src/*"],
  "@e2e/app*": ["apps/react-app-e2e/src/*"],
  "@e2e/next*": ["apps/react-next-e2e/src/*"]
}
...
```

## Pronto!!! Agora temos todo o ambiente configurado e estruturado, pronto para ser executado.

Agora podemos rodar um servidor web para desenvolvimento, rodar testes unitários com Jest, rodar testes E2E com Cypress, abrir no Browser gráfico de dependências do projeto Nx Monorepo, podendo também gerar subprojetos, bibliotecas e componentes, para React.js, Next.js, Angular e Vue.js entre outros [mais…](https://nx.dev/community#community-plugin-list)

**Para entendendo melhor o Nx:**

- **[Monorepos](https://nx.dev/guides/why-monorepos)**
- **[Mental Model](https://nx.dev/using-nx/mental-model)**
- **[Using Nx Core Without Plugins](https://nx.dev/getting-started/nx-core)**
- **[Computation Caching](https://nx.dev/using-nx/caching)**

Bom!!! Vamos botar em prática o projeto, vamos executar os comandos abaixo:

#### Executar gráfico de dependências no browser do projeto Nx Monorepo:

Terminal:

```bash
$ nx dep-graph
# Ou
$ npm run open:graph

```

#### Executar testes unitários, das bibliotecas e subprojetos:

Terminal:

```bash
# Lib Shared
$ nx test lib-shared
# Ou
$ npm run test:lib:shared

# Lib React.js
$ nx test lib-react
# Ou
$ npm run test:lib:react

# React App
$ nx test react-app
# Ou
$ npm run test:app

# React Next
$ nx test react-next
# Ou
$ npm run test:next

# Todos!!!
$ nx run-many --target=test --all
# Ou
$ npm run test:all

```

#### Executar testes E2E(End To End) dos subprojetos:

Terminal:

```bash
# React App (Console)
$ nx e2e react-app-e2e --watch=false
# Ou
$ npm run e2e:console:app

# React App (Open Browser)
$ nx e2e react-app-e2e --watch=true
# Ou
$ npm run e2e:browser:app

# React Next (Console)
$ nx e2e react-next-e2e --watch=false
# Ou
$ npm run e2e:console:next

# React Next (Open Browser)
$ nx e2e react-next-e2e --watch=true
# Ou
$ npm run e2e:browser:next

```

#### Executar verificação lint, das bibliotecas e subprojetos:

Terminal:

```bash
# Lib Shared
$ nx lint lib-shared
# Ou
$ npm run lint:lib:shared

# Lib React.js
$ nx lint lib-react
# Ou
$ npm run lint:lib:react

# React App
$ nx lint react-app --fix=false
# Ou
$ npm run lint:app

# React Next
$ nx lint react-next --fix=false
# Ou
$ npm run lint:next

```

#### Executar builds dos subprojetos:

Terminal:

```bash
# React App
$ nx build react-app
# Ou
$ npm run build:app

# React Next
$ nx build react-next
# Ou
$ npm run build:next

# Todos!!!
$ nx run-many --target=build --all
# Ou
$ npm run build:all


# Para PROD:

# React App
$ nx build react-app --prod
# Ou
$ npm run build:app:prod

# React Next
$ nx build react-next --prod
# Ou
$ npm run build:next:prod

# Todos!!!
$ nx run-many --target=build --all --prod
# Ou
$ npm run build:all:prod

```

#### Executar um servidor web de desenvolvimento dos subprojetos:

Terminal:

```bash
# React App
$ nx serve react-app --port=4201
# Ou
$ npm run start:app

# React Next
$ nx serve react-next --port=4202
# Ou
$ npm run start:next

```

Agora que temos nosso projeto todo configurado, vamos criar e alterar alguns arquivos para exemplificar melhor todo o cenário de um projeto base Nx Monorepo.

### Criar e alterar alguns arquivos, para exemplo de uma aplicação base:

### Projeto de biblioteca compartilhada:

Vamos deletar alguns arquivos desnecessários:

```bash

# Remover lixo:
$ rm ./libs/.gitkeep
$ rm -rf ./libs/lib-shared/src/lib

```

Agora vamos criar alguns arquivos da biblioteca compartilhada:

Crie o arquivo **logger-manager.ts** esse arquivo será responsável pelo gerenciamento de logs e consoles da aplicação, no diretório:

- nx-stack-reactjs
  - ./libs/lib-shared/src/logging/logger-manager.ts

```typescript
// Instructions for use:
/*
import { LoggerEnum, LoggerManager } from '@lib/shared';

// Create an instance, values:
//  prefix: string;
//  activeConsole: boolean;
const logger = new LoggerManager('# logger: ', true);

// Trigger logs and create records.
logger.info('Console info 001', {}, [], '...');
logger.info('Console info 002', {}, [], '...');
logger.trace('Console trace 001', {}, [], '...');
logger.debug('Console debug 001', {}, [], '...');
logger.error('Console error 001', {}, [], '...');

console.log('Length Loggers', logger.getLoggers().length);
console.log('Length Loggers By INFO ', logger.getLoggersByType(LoggerEnum.INFO).length);
console.log('Length Loggers By ERROR ', logger.getLoggersByType(LoggerEnum.ERROR).length);

logger.getLoggers().map(function (item) {
  console.log('Map all Loggers', item);
  return item;
});

logger.getLoggersByType(LoggerEnum.ERROR).map(function (item) {
  console.log('Map all Loggers By ERROR', item);
  return item;
});
*/

export enum LoggerEnum {
  LOG,
  TRACE,
  DEBUG,
  INFO,
  WARN,
  ERROR,
}

export type LoggerType = {
  prefix: string;
  message: string;
  parameters: any;
  typeLogger: LoggerEnum;
};

export interface ILogger {
  log(message: string, ...parameters: any): void;
  trace(message: string, ...parameters: any): void;
  debug(message: string, ...parameters: any): void;
  info(message: string, ...parameters: any): void;
  warn(message: string, ...parameters: any): void;
  error(message: string, ...parameters: any): void;
}

export interface ILoggerManager extends ILogger {
  register(logger: LoggerType): void;
  getLoggers(): LoggerType[];
  getLoggersByType(typeLogger: LoggerEnum): LoggerType[];
}

export class LoggerManager implements ILoggerManager {
  private prefix: string;
  private activeConsole: boolean;
  private loggers: LoggerType[];

  constructor(prefix: string = '', activeConsole: boolean = true) {
    this.prefix = prefix;
    this.activeConsole = activeConsole;
    this.loggers = [];
  }

  public register(logger: LoggerType): void {
    this.loggers.push(logger);
    const finalMessage: string = `${logger.prefix}: ${logger.message}`;
    switch (logger.typeLogger) {
      case LoggerEnum.LOG:
        if (this.activeConsole) console.log(finalMessage, ...logger.parameters);
        break;
      case LoggerEnum.TRACE:
        if (this.activeConsole)
          console.trace(finalMessage, ...logger.parameters);
        break;
      case LoggerEnum.DEBUG:
        if (this.activeConsole)
          console.debug(finalMessage, ...logger.parameters);
        break;
      case LoggerEnum.INFO:
        if (this.activeConsole)
          console.info(finalMessage, ...logger.parameters);
        break;
      case LoggerEnum.WARN:
        if (this.activeConsole)
          console.warn(finalMessage, ...logger.parameters);
        break;
      case LoggerEnum.ERROR:
        if (this.activeConsole)
          console.error(finalMessage, ...logger.parameters);
        break;
      default:
        if (this.activeConsole) console.log(finalMessage, ...logger.parameters);
    }
  }

  public getLoggers(): LoggerType[] {
    return this.loggers;
  }

  public getLoggersByType(typeLogger: LoggerEnum): LoggerType[] {
    return this.loggers.filter(item => item.typeLogger == typeLogger);
  }

  public log(message: string, ...parameters: any): void {
    const logger: LoggerType = {
      prefix: this.prefix,
      message: message,
      parameters: parameters,
      typeLogger: LoggerEnum.LOG,
    };
    this.register(logger);
  }

  public trace(message: string, ...parameters: any): void {
    const logger: LoggerType = {
      prefix: this.prefix,
      message: message,
      parameters: parameters,
      typeLogger: LoggerEnum.TRACE,
    };
    this.register(logger);
  }

  public debug(message: string, ...parameters: any): void {
    const logger: LoggerType = {
      prefix: this.prefix,
      message: message,
      parameters: parameters,
      typeLogger: LoggerEnum.DEBUG,
    };
    this.register(logger);
  }

  public info(message: string, ...parameters: any): void {
    const logger: LoggerType = {
      prefix: this.prefix,
      message: message,
      parameters: parameters,
      typeLogger: LoggerEnum.INFO,
    };
    this.register(logger);
  }

  public warn(message: string, ...parameters: any): void {
    const logger: LoggerType = {
      prefix: this.prefix,
      message: message,
      parameters: parameters,
      typeLogger: LoggerEnum.WARN,
    };
    this.register(logger);
  }

  public error(message: string, ...parameters: any): void {
    const logger: LoggerType = {
      prefix: this.prefix,
      message: message,
      parameters: parameters,
      typeLogger: LoggerEnum.ERROR,
    };
    this.register(logger);
  }
}
```

Vamos também criar o arquivo de teste **logger-manager.spec.ts**, para testarmos o **logger-manager.ts**:

- nx-stack-reactjs
  - ./libs/lib-shared/src/logging/logger-manager.spec.ts

```typescript
import { LoggerEnum, LoggerManager } from '@lib/shared';

describe('LoggerManager', () => {
  const prefix: string = '# logger: ';
  const activeConsole: boolean = false;

  it('should return the Loggers', async () => {
    const expected = 6;

    // Create an instance of LoggerManager:
    const logger = new LoggerManager(prefix, activeConsole);

    // Trigger logs and create records:
    logger.log('Console log 001', {}, [], '...');
    logger.trace('Console trace 002', {}, [], '...');
    logger.debug('Console debug 003', {}, [], '...');
    logger.info('Console info 004', {}, [], '...');
    logger.warn('Console warn 005', {}, [], '...');
    logger.error('Console error 006', {}, [], '...');

    // Get length the Loggers
    const result = logger.getLoggers().length;

    expect(result).toBe(expected);
  });

  it('should return the Loggers By INFO', async () => {
    const expected = 3;

    // Create an instance of LoggerManager:
    const logger = new LoggerManager(prefix, activeConsole);

    // Trigger logs and create records:
    logger.info('Console info 001', {}, [], '...');
    logger.info('Console info 002', {}, [], '...');
    logger.info('Console info 003', {}, [], '...');

    // Get length the Loggers By INFO
    const result = logger.getLoggersByType(LoggerEnum.INFO).length;

    expect(result).toBe(expected);
  });
});
```

No arquivo index.ts vamos alterar e adicione os importes do logger-manager.ts:

- nx-stack-reactjs
  - ./libs/lib-shared/src/index.ts

```typescript
export * from '@lib/shared/logging/logger-manager';
```

### Projeto de biblioteca React:

Vamos deletar alguns arquivos desnecessários:

```bash

# Remover lixo:
$ rm -rf ./libs/lib-react/src/lib

```

Agora vamos gerar alguns componentes da biblioteca React:

Vamos gerar componentes React Welcome:

```bash

# Gerar um componente ReactJS pelo Nx:
# Font: https://nx.dev/react/component
$ nx generate @nrwl/react:component --project=lib-react --style=styled-components --export=true --directory=components --pascalCaseDirectory=true --pascalCaseFiles=true --name=Welcome

```

Após gerar o componente **Welcome** vamos alterar o arquivo:

- nx-stack-reactjs
  - ./libs/lib-react/src/components/Welcome/Welcome.tsx

```typescript
import styled from 'styled-components';

export interface WelcomeProps {
  message: string;
}

const StyledWelcome = styled.div`
  color: pink;
`;

export function Welcome(props: WelcomeProps) {
  return (
    <StyledWelcome>
      <h1>{props.message}</h1>
    </StyledWelcome>
  );
}

export default Welcome;
```

Vamos também criar o arquivo de teste **Welcome.spec.tsx**, para testarmos o **Welcome.tsx**:

- nx-stack-reactjs
  - ./libs/lib-react/src/components/Welcome/Welcome.spec.tsx

```typescript
import { render } from '@testing-library/react';

import Welcome from '@lib/react/components/Welcome/Welcome';

describe('Welcome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Welcome message="Passing message to test!" />,
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the message', () => {
    const { getByText } = render(
      <Welcome message="Passing message to test!" />,
    );
    expect(getByText('Passing message to test!')).toBeTruthy();
  });
});
```

No arquivo index.ts adicione e alterar os importes do Welcome.ts:

- nx-stack-reactjs
  - ./libs/lib-react/src/index.ts

```typescript
export * from '@lib/react/components/Welcome/Welcome';
```

Pronto!!! A biblioteca React está pronta e com testes.

Para executar ela é só rodar os comandos abaixo:

```bash
# Lib React.js
$ nx test lib-react
# Ou
$ npm run test:lib:react


# Lib React.js
$ nx lint lib-react
# Ou
$ npm run lint:lib:react

```

<!--
sdsdsd
s
ad
sa
d
as
d
as
d
sa
d
sa

d
sa
d
sa
d
sa
d
sa
d
s -->

### Projeto React APP:

```bash

# Remover lixo:
$ rm ./apps/.gitkeep
$ rm ./apps/react-app/src/app/nx-welcome.tsx


# File change:
# gedit ./apps/react-app/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom';

import App from '@app/App';
import { LoggerManager } from '@lib/shared';
import { environment } from '@app/envs/environment';

const logger = new LoggerManager('# logger: ', !environment.production);

try {
  logger.info('Initialize the React application...');
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
} catch (error: unknown) {
  logger.error('React application initialization error:', error);
} finally {
  logger.info('React application initialization completed!');
}


# File change:
# gedit ./apps/react-app/src/app/App.tsx
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { Welcome } from '@lib/react';

const GlobalStyle = createGlobalStyle`
  // Global Style!
`;

const StyledCommon = styled.div`
  // Common Style!
`;

export interface AppProps {}

export function App(props: AppProps) {
  const message = 'Welcome to a ReactJS application \\O/';
  return (
    <>
      <GlobalStyle />
      <StyledCommon>
        <BrowserRouter>
          <ConfigProvider locale={ptBR}>
            <Welcome message={message} />
            <nav>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/page01">Page 01</Link>
                </li>
              </ul>
            </nav>
            <main>
              <Routes>
                <Route path="/home" element={<h2>Home</h2>} />
                <Route path="/page01" element={<h2>Page 01</h2>} />
                <Route path="error" element={<h2>Server Error</h2>} />
                <Route path="*" element={<h2>Not Found</h2>} />
              </Routes>
            </main>
          </ConfigProvider>
        </BrowserRouter>
      </StyledCommon>
    </>
  );
}
export default App;


# File change:
# gedit ./apps/react-app/src/app/App.spec.tsx
import { render } from '@testing-library/react';

import App from '@app/App';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
});


```

### Projeto React APP E2E(End-to-end with Cypress):

```bash

# Remover lixo:
$ rm ./apps/react-app-e2e/src/fixtures/example.json
$ rm ./apps/react-app-e2e/src/integration/app.spec.ts
$ rm ./apps/react-app-e2e/src/support/app.po.ts

# Criar novos arquivos:
$ echo "" > ./apps/react-app-e2e/src/fixtures/.gitkeep
$ echo "" > ./apps/react-app-e2e/src/integration/App.spec.ts


# File change:
# gedit ./apps/react-app-e2e/src/support/index.ts
// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';


# File change:
# gedit ./apps/react-app-e2e/src/support/commands.ts
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


# File change:
# gedit ./apps/react-app-e2e/src/integration/App.spec.ts
describe('react-app', () => {
  // beforeEach(() => cy.visit('/'));

  it('Should return true when title component was correct', () => {
    cy.visit('/home');

    cy.contains('Welcome to the ReactJS application!').should(
      'to.have.length',
      1,
    );
  });

  it('Should click on the contact menu item', () => {
    cy.visit('/home');

    cy.get('[data-cy=header-link-contact]').click();

    cy.contains('h2', 'Contact');
  });

  it('Should click on the about menu item', () => {
    cy.visit('/home');

    cy.get('[data-cy=header-link-about]').click();

    cy.contains('h2', 'About');
  });

  it('Should access page not found', () => {
    cy.visit('/');

    cy.contains('h2', 'Not Found!');
  });

  it('Should access page server error', () => {
    cy.visit('/error');

    cy.contains('h2', 'Server Error!');
  });
});


```

### Projeto React Next:

```bash

# ...
$ ...


```

### Projeto React Next E2E(End-to-end with Cypress):

```bash

# Remover lixo:
$ rm ./apps/react-next-e2e/src/fixtures/example.json
$ rm ./apps/react-next-e2e/src/integration/app.spec.ts
$ rm ./apps/react-next-e2e/src/support/app.po.ts

# Criar novos arquivos:
$ echo "" > ./apps/react-app-e2e/src/fixtures/.gitkeep
$ echo "" > ./apps/react-app-e2e/src/integration/pages/index.spec.ts


# File change:
# gedit ./apps/react-app-e2e/src/support/index.ts
// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';


# File change:
# gedit ./apps/react-app-e2e/src/support/commands.ts
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


# File change:
# gedit ./apps/react-app-e2e/src/integration/pages/index.spec.ts
describe('react-next', () => {
  beforeEach(() => cy.visit('/'));

  it('Should return true when title component was correct', () => {
    cy.contains('h1', 'ReactJS Structure').should('to.have.length', 1);
  });

  it('Should return true when text component was correct', () => {
    cy.contains('p', 'A ReactJS + Next.js structure.').should(
      'to.have.length',
      1,
    );
  });
});

```

### Executando o projeto \O/

```bash

# LISTAR DEPENDÊNCIAS GLOBAIS
$ npm list -g

# LISTAR DEPENDÊNCIAS
$ npm list --depth=0

# ABRIR GRÁFICO DE DEPENDÊNCIAS
# Font: https://nx.dev/cli/dep-graph
$ nx dep-graph


## APP
# Executando o projeto (react-app):
$ npm run start:app
$ curl http://localhost:4201/

# Construindo o projeto (react-app):
$ npm run build:app
# OU
$ npm run build:app:prod

# Testando o projeto (react-app):
$ npm run test:app


## NEXT
# Executando o projeto (react-next):
$ npm run start:next
$ curl http://localhost:4202/

# Construindo o projeto (react-next):
$ npm run build:next
# OU
$ npm run build:next:prod

# Testando o projeto (react-next):
$ npm run test:next


## LIBS
# Testando lib (lib-shared):
$ npm run test:lib:shared

# Testando lib (lib-react):
$ npm run test:lib:react


## COMANDOS GERAIS:

# Construindo todo o projeto:
$ npm run build:all
# OU
$ npm run build:all:prod

# Testando todo o projeto:
$ npm run test:all

# DOC dos comandos Nx:
$ npm run help


```

### Referências:

- Documentação oficial Beta. **React Docs BETA** <br/>
  Acessado: _Janeiro de 2022_ <br/>
  Disponível: _[https://beta.reactjs.org/](https://beta.reactjs.org/)_

- Nirmalya Ghosh, Blog sitepoint. **How to Build a Monorepo with Nx, Next.js and TypeScript** <br/>
  Acessado: _Janeiro de 2022_ <br/>
  Disponível: _[https://www.sitepoint.com/monorepo-nx-next-typescript/](https://www.sitepoint.com/monorepo-nx-next-typescript/)_

- Aryclenio Barros, Blog. **Parte 1: Configurando um projeto ReactJS Typescript com .editorconfig, Eslint e Prettier** <br/>
  Acessado: _Janeiro de 2022_ <br/>
  Disponível: _[https://dev.to/aryclenio/configurando-um-projeto-reactjs-typescript-com-editorconfig-eslint-e-prettier-leo](https://dev.to/aryclenio/configurando-um-projeto-reactjs-typescript-com-editorconfig-eslint-e-prettier-leo)_

- Victor Savkin, Blog NrWl. **Nx Now Supports Next.js** <br/>
  Acessado: _Janeiro de 2022_ <br/>
  Disponível: _[https://blog.nrwl.io/nx-now-supports-next-js-84ae3d0b2aed](https://blog.nrwl.io/nx-now-supports-next-js-84ae3d0b2aed)_

- Nirmalya Ghosh, Blog SitePoint. **How to Build a Monorepo with Nx, Next.js and TypeScript** <br/>
  Acessado: _Janeiro de 2022_ <br/>
  Disponível: _[https://www.sitepoint.com/monorepo-nx-next-typescript/](https://www.sitepoint.com/monorepo-nx-next-typescript/)_

- Kristan 'Krispy' Uccello, Blog Start it up. **Nx, NestJs, React - Docker Deploys** <br/>
  Acessado: _Janeiro de 2022_ <br/>
  Disponível: _[https://medium.com/swlh/nx-nestjs-react-docker-deploys-928a55fc19fd](https://medium.com/swlh/nx-nestjs-react-docker-deploys-928a55fc19fd)_

- Elisandro Mello Corrêa, GeekBlog. **Parte 1: Visual Studio Code como editor de texto padrão do Git** <br/>
  Acessado: _Janeiro de 2022_ <br/>
  Disponível: _[https://blog.geekhunter.com.br/visual-studio-code-como-editor-do-git/](https://blog.geekhunter.com.br/visual-studio-code-como-editor-do-git/)_

- Elisandro Mello Corrêa, GeekBlog. **Parte 2: Comandos Git mais utilizados e como configurar** <br/>
  Acessado: _Janeiro de 2022_ <br/>
  Disponível: _[https://blog.geekhunter.com.br/comandos-git-mais-utilizados/](https://blog.geekhunter.com.br/comandos-git-mais-utilizados/)_

- Elisandro Mello Corrêa, GeekBlog. **Parte 3: O que é Commit e como usar Commits Semânticos** <br/>
  Acessado: _Janeiro de 2022_ <br/>
  Disponível: _[https://blog.geekhunter.com.br/o-que-e-commit-e-como-usar-commits-semanticos/](https://blog.geekhunter.com.br/o-que-e-commit-e-como-usar-commits-semanticos/)_

- Elisandro Mello Corrêa, GeekBlog. **Parte 4: JavaScript Standard Style: melhores práticas em JS** <br/>
  Acessado: _Janeiro de 2022_ <br/>
  Disponível: _[https://blog.geekhunter.com.br/javascript-standard-style/](https://blog.geekhunter.com.br/javascript-standard-style/)_

- Elisandro Mello Corrêa, GeekBlog. **Parte 5: Tutorial: linting em TypeScript com ESLint** <br/>
  Acessado: _Janeiro de 2022_ <br/>
  Disponível: _[https://blog.geekhunter.com.br/eslint-typescript-tutorial/](https://blog.geekhunter.com.br/eslint-typescript-tutorial/)_

- Elisandro Mello Corrêa, GeekBlog. **Parte 6: TypeScript tutorial: Validação do processo de linting no pré-commit** <br/>
  Acessado: _Janeiro de 2022_ <br/>
  Disponível: _[https://blog.geekhunter.com.br/typescript-tutorial/](https://blog.geekhunter.com.br/typescript-tutorial/)_

- Allan Ramos, Blog Medium Devzera. **Tudo que você queria saber sobre o package-lock.json mas estava com vergonha de perguntar** <br/>
  Acessado: _Janeiro de 2022_ <br/>
  Disponível: _[https://medium.com/devzera/tudo-que-voc%C3%AA-queria-saber-sobre-o-package-lock-json-mas-estava-com-vergonha-de-perguntar-e70589f2855f](https://medium.com/devzera/tudo-que-voc%C3%AA-queria-saber-sobre-o-package-lock-json-mas-estava-com-vergonha-de-perguntar-e70589f2855f)_

## Licença

[<img width="190" src="https://raw.githubusercontent.com/alisonbuss/my-files/master/files/images/logo-open-source-550x200px.png">](https://opensource.org/licenses)
[<img width="166" src="https://raw.githubusercontent.com/alisonbuss/my-files/master/files/images/icon-license-mit-500px.png">](https://github.com/alisonbuss/nx-stack-reactjs/blob/master/LICENSE)
