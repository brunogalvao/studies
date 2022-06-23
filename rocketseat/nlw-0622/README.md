# New Level Wek

Algumas anotações:

```
CMS = Content Management System

Traz tanto o painel de Admin tanto quanto a parte de visual do front-end(temas)
```

## GraphCMS
Headles CMS (GraphCMS): Painel de ADMIN (dados fornecidos através de uma API REST ou GraphQL).

```
> React que consome essa API do CMS

> query / mutation
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
No projeto foi usado a lib 'https://phosphoricons.com' gerando os ícones em svg um componente.

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