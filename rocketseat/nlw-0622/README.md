# New Level Wek

Algumas anotações:

```
CMS = Content Management System

Traz tanto o painel de Admin tanto quanto a parte de visual do front-end(temas)
```
## Instalando o React
Usando o Vites, o React é instalado com o comando:


```
https://vitejs.dev/guide/#scaffolding-your-first-vite-project
```

## Instalando o Tailwind CSS

```
npm i tailwindcss postcss autoprefixer -D
```

Iniciando o Tailwind no projeto e criando o arquivo de configuração em postcss.

```
npx tailwindcss init -p
```

## GraphCMS

CMS = Content Management System.

Traz tanto o painel de Admin tanto quanto a parte de visual do front-end(temas).

Headles CMS (GraphCMS): Painel de ADMIN (dados fornecidos através de uma API REST ou GraphQL).

```
> - React que consome essa API do CMS

> - query / mutation
```

- **query** = buscar dados
- **mutation** = criar, alterar ou deletar dados

Uso de dados back end pelo front end otimizado
> **overfeting** - uso de dados de back end para o front end
> **underfeting** - uso de dados de front end para o back end


## Chamada e feito com o Apollo
```

"npm i @apollo/client graphql"

```


## Dica para componentes
>  - Quando a informação se repete;
>  - A interferencia de informação for redundante;

## Date-fns
Para a data e hora foi usado o 'date-fns', que é um pacote que permite trabalhar com datas e horas.

```
npm i date-fns
```

## Ícones
No projeto foi usado a lib 'https://phosphoricons.com' os ícones são fornecidos em svg em componente React/Vuejs.

```
npm i phosphor react
```

## Biblioteca de Player (VimeJS)

Biblioteca de gerenciamento do player de vídeo.

```
https://vimejs.com

npm - npm i @vime/core @vime/react
```

Após a instalação e configurando o ID do vídeo, importar o css default do player.

```
import '@vime/core/themes/default.css';
```


> - Pode usar o **--force** para instalar o pacote.
> - Tem suporte ao **Vimeo**.

## React Router Dom

Biblioteca para roteamento de rotas.

```
npm i react-router-dom
```

# Dica

Grupo de hover no tailwind.

```
> - Adiciona 'group' onde o hover será ativado;
> - E 'group-hover' onde o hover fará a mudança;
```

## Classnames

-- Classnames é uma biblioteca que permite a criação de classes com mudanças de estado mais simples.


## GraphQL codegen

Instalando dependências do GraphQL codegen, onde ele irá capturar a tipagem já configurada no GraphCMS.


```
npm i @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo
```

Instalando o GraphQL codegen no projeto.

```
npm i @graphql-codegen/cli -D
```

No arquivo 'codegen.yml' foi configurado o tipo de linguagem que será gerado.

```
schema: https://api-sa-east-1.graphcms.com/v2/cl4ofw8lq01qb01xkfgry6ieg/master

documents: './src/graphql/*.graphql'

generates:
  ./src/graphql/generated.ts:
    plugins:
      - typescript
      - typescript-operations
      - typescript-react-apollo
    config:
      reactApolloVersion: 3
      withHooks: true 
      // onde esse comando nos fornecerá automaticamente os hooks do React usados no projeto.
```

# Deploy

O deploy será feito na Vercel.

**OBS:** procurar para instalar o CLI github na máquina.