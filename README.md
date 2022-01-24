# nx-stack-reactjs

#### Translation for: **[English](https://github.com/alisonbuss/nx-stack-reactjs/blob/master/README_LANG_EN.md)**.

# Um simples projeto Nx Monorepo focado na Stack ReactJS.

### Projeto foi Inspirado:

- **Vídeo(_[Como inicio meus apps com ReactJS? Next.js, TypeScript, ESLint e Styled Components | Code/Drops #50](https://www.youtube.com/watch?v=1nVUfZg2dSA)_) YouTube, Canal Rocketseat.**
- **Vídeo(_[Essa feature fez o Next.js ser o framework mais popular | Code/Drops #59](https://www.youtube.com/watch?v=u1kCtkVR7cE)_) YouTube, Canal Rocketseat.**
- **Vídeo(_[Como padronizar seu código React](https://www.youtube.com/watch?v=6RQjXb_BfpI)_) YouTube, Canal AlgaWorks.**
- **Vídeo(_[Criando projeto ReactJS com Typescript, Eslint e Prettier.](https://www.youtube.com/watch?v=QqY5qRnLTF8)_) YouTube, Canal luiz silva.**
- **Vídeo(_[Como configurar um projeto typescript do zero com ESLINT, PRETTIER, DOTENV, GIT e .EDITORCONFIG](https://www.youtube.com/watch?v=r2yzlFz7Ua4)_) YouTube, Canal Bruno Braga.**
- **Vídeo(_[Configurando o AntDesign dentro do projeto React (+ BONUS Formulários)](https://www.youtube.com/watch?v=VzNxjNxxnYU)_) YouTube, Canal AlgaWorks.**

### Documentação de apoio:

- **[Intro to Nx](https://nx.dev/getting-started/intro)**.
- **[Nx Setup](https://nx.dev/getting-started/nx-setup)**.
- **[Configuration: package.json and nx.json](https://nx.dev/configuration/packagejson)**.
- **[Configuration: project.json and nx.json](https://nx.dev/configuration/projectjson)**.
- **[Using ESLint in Nx Workspaces](https://nx.dev/guides/eslint)**.
- **[Documentação oficial do ReactJS](https://reactjs.org/docs/getting-started.html)**.
- **[Documentação oficial do Next.js](https://nextjs.org/docs/getting-started)**.
- **[Documentação oficial do ESLint](https://eslint.org/docs/user-guide/getting-started)**.
- **[Documentação oficial do Styled Components](https://styled-components.com/docs)**.
- **[Documentação oficial do TypeScript](https://www.typescriptlang.org/docs/)**.

### Dependências de Ambiente:

- **[[NVM(Node Version Manager)](https://github.com/nvm-sh/nvm)]** 0.38.0 ou superior...
- **[[VS Code](https://code.visualstudio.com/download)]** 1.62.2 ou superior...
- **[[Docker](https://docs.docker.com/engine/docker-overview/)]** 18.09.6 ou superior...
- **[[Docker Compose](https://docs.docker.com/compose/)]** 1.24.0 ou superior...
- **[[GNU Make](https://www.gnu.org/software/make/)]** 4.1 ou superior...

> **Nota:**
>
> - _É necessário ter instalado as dependências citadas a cima, para que o projeto funcione._
> - _A execução desse projeto foi feita através de um **Desktop Ubuntu 19.04 (Dingo)**._

### Objetivo:

Fornecer um projeto de exemplo de um Setup ReactJS/Next.js com Nx Monorepo, com um ambiente de desenvolvimento todo configurando com os seguintes recursos e tecnologias:

- **ESLint**
- **Prettier**
- **.editorconfig**
- **TypeScript**
- **ReactJS**
- **Ant Design**
- **Next.js**

## Ambiente:

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

# INSTALAR PLUGINS DO VS CODE:

# Listar todos os plugins instalados:
$ code --list-extensions;

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

## Criar o um projeto monorepo usando o Nx:

```bash

# CRIAR PROJETO MONOREPO:
$ npx create-nx-workspace --preset=empty --nx-cloud=false nx-stack-reactjs
$ cd ./nx-stack-reactjs

$ npm install --save-dev @nrwl/react
$ npm install --save-dev @nrwl/next

# CRIAR LIB COMPARTILHADA
# Font: https://nx.dev/workspace/library
$ nx generate @nrwl/workspace:lib --setParserOptionsProject=true --name=lib-shared

# CRIAR LIB REACT
# Font: https://nx.dev/react/library
$ nx generate @nrwl/react:lib --style=styled-components --setParserOptionsProject=true --pascalCaseFiles=true --name=lib-react

# CRIAR PROJETO REACTJS
# Font: https://nx.dev/react/application
$ nx generate @nrwl/react:app --style=styled-components --routing=true --setParserOptionsProject=true --pascalCaseFiles=true --name=react-app

# CRIAR PROJETO NEXT
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

```bash

$ npm install --save history
$ npm install --save react-router-dom@6.2.1
$ npm install --save antd

$ npm install --save-dev @testing-library/dom
$ npm install --save-dev @testing-library/jest-dom
$ npm install --save-dev @testing-library/user-event

$ npm install --save-dev eslint-plugin-prettier
$ npm install --save-dev eslint-plugin-testing-library

```

# Alterando arquivos de configurações do projeto:

```bash

# File change:
# $ gedit ./.eslintrc.json
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


# File change:
# $ gedit ./libs/lib-shared/.eslintrc.json
{
  "env": {},
  "extends": ["../../.eslintrc.json"],
  "ignorePatterns": ["!**/*"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "extends": [],
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


# File change:
# $ gedit ./libs/lib-react/.eslintrc.json
{
  "env": {},
  "extends": ["../../.eslintrc.json"],
  "ignorePatterns": ["!**/*"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "extends": ["plugin:@nrwl/nx/react", "plugin:react/recommended"],
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


# File change:
# $ gedit ./apps/react-app/.eslintrc.json
{
  "env": {},
  "extends": ["../../.eslintrc.json"],
  "ignorePatterns": ["!**/*"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "extends": ["plugin:@nrwl/nx/react", "plugin:react/recommended"],
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



# File change:
# $ gedit ./apps/react-next/.eslintrc.json
{
  "env": {
    "jest": true
  },
  "extends": ["../../.eslintrc.json"],
  "ignorePatterns": ["!**/*"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "extends": [
        "plugin:@nrwl/nx/react-typescript",
        "next",
        "next/core-web-vitals"
      ],
      "rules": {
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



# File change:
# $ gedit ./.eslintignore
/*.js
**/*.js
node_modules
build
dist


# File change:
# $ gedit ./.prettierrc
{
  "semi": true,
  "singleQuote": true,
  "arrowParens": "avoid",
  "trailingComma": "all"
}


# File change:
# $ gedit ./.vscode/settings.json
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


# File change:
# $ gedit ./.vscode/extensions.json
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


# File change:
# $ gedit ./jest.config.js
const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  verbose: false,
  projects: getJestProjects(),

  //Font: https://ant.design/docs/react/use-with-create-react-app#Test-with-Jest
  transformIgnorePatterns: [
    `/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$`,
  ],
};


# File change:
# $ gedit ./package.json
"scripts": {
  // react-app
  "start:app": "nx serve react-app --port 4201",
  "build:app": "nx build react-app",
  "build:app:prod": "nx build react-app --prod",
  "test:app": "nx test react-app",
  "dev:app": "nx dev react-app",
  // react-next
  "start:next": "nx serve react-next --port 4202",
  "build:next": "nx build react-next",
  "build:next:prod": "nx build react-next --prod",
  "test:next": "nx test react-next",
  "dev:next": "nx dev react-next",
  // lib-shared
  "test:lib:shared": "nx test lib-shared",
  // lib-react
  "test:lib:react": "nx test lib-react",
  // All
  "build:all": "nx run-many --target=build --all",
  "build:all:prod": "nx run-many --target=build --all --prod",
  "build:since": "nx affected --target=build",
  "test:all": "nx run-many --target=test --all",
  "test:since": "nx affected --target=test",
  "dev": "nx run-many --target=dev --all",
  "lint": "nx workspace-lint",
  "format": "nx format:write",
  "format:check": "nx format:check",
  "format:write": "nx format:write",
  "update": "nx migrate latest",
  "help": "nx help"
},


# File change:
# $ gedit ./tsconfig.base.json
"paths": {
  "@lib/shared/*": ["libs/lib-shared/src/*"],
  "@lib/shared": ["libs/lib-shared/src/index.ts"],
  "@lib/react/*": ["libs/lib-react/src/*"],
  "@lib/react": ["libs/lib-react/src/index.ts"],
  "@app/*": ["apps/react-app/src/app/*"],
  "@app/envs*": ["apps/react-app/src/environments/*"],
  "@app/assets*": ["apps/react-app/src/assets/*"],
  "@next/*": ["apps/react-next/*"]
}

```

## Criar e alterar alguns arquivos para um exemplo de uma aplicação simples:

### Projeto de biblioteca compartilhada:

```bash

# Remover lixo:
$ rm ./libs/.gitkeep
$ rm -rf ./libs/lib-shared/src/lib

# Create file: ./libs/lib-shared/src/logging/logger-manager.ts
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


# Create file: ./libs/lib-shared/src/logging/logger-manager.spec.ts
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


# File change:
# $ gedit ./libs/lib-shared/src/index.ts
export * from '@lib/shared/logging/logger-manager';


```

### Projeto de biblioteca ReactJS:

```bash

# Remover lixo:
$ rm -rf ./libs/lib-react/src/lib

# Gerar um componente ReactJS pelo Nx:
# Font: https://nx.dev/react/component
$ nx generate @nrwl/react:component --project=lib-react --style=styled-components --export=true --directory=components --pascalCaseDirectory=true --pascalCaseFiles=true --name=Welcome


# File change:
# $ gedit ./libs/lib-react/src/components/Welcome/Welcome.tsx
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


# File change:
# $ gedit ./libs/lib-react/src/components/Welcome/Welcome.spec.tsx
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


# File change:
# $ gedit./libs/lib-react/src/index.ts
export * from '@lib/react/components/Welcome/Welcome';


```

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

### Projeto React Next:

```bash

# ...
$ ...


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

## Licença

[<img width="190" src="https://raw.githubusercontent.com/alisonbuss/my-files/master/files/images/logo-open-source-550x200px.png">](https://opensource.org/licenses)
[<img width="166" src="https://raw.githubusercontent.com/alisonbuss/my-files/master/files/images/icon-license-mit-500px.png">](https://github.com/alisonbuss/nx-stack-reactjs/blob/master/LICENSE)
