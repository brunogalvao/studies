# Anotações sobre o **GIT**


### Alguns comandos **GIT**:

> **git log --oneline** --> ver todos os commits do projeto.

> **git pull** "caminho" --> atualiza o repositório.

> **git status** --> verifica o status do repositório.

> **git commit** --> commitar o arquivo.

> **git push** --> enviar o arquivo para o repositório (origin main).

> **git commit . -m "comentario"** --> adicionando os arquivos e enviando o commit.

> **touch .gitignore** --> criando o arquivo "gitignore".

Link para **outros comandos**:
> https://enlear.academy/26-git-command-i-use-all-the-time-cheatsheet-6c5682ded2af

### Voltando commit's:

> **git log --oneline** --> ver todos os commits.

> **git restore --source +has do historico .** --> voltando o commit (no final colocar o arquivo especifico ou o ponto).


### Criando uma branch diferente:

> **git checkou -b "nome da branch"**

Trocando entre branches.

> **git switch "nome da branch"**

para visualizar qual branch está atualmente ou todas as branches.

> **git branch**

### Fazendo merge:

> **git merge "nome da branch"**

### Create Repositório com o GitCLI

Link da [Documentação GitCLI](https://cli.github.com/manual/gh_repo_create)

Autenticando com o gitHub

```
gh auth login
```

Assim que for autenticado e autorizado, você pode criar o repositório com o comando:

```
gh repo create <nomedoProjeto> —public
```

### Criando gitignore

```
$ touch .gitignore
```

## Modelo de gitignore

```
#Logs
logs
.logs
npm-debug.log*
yarn-error.log*
yarn-debug.log*
pnp-debug.log*
lerna-debug.log*

node_modules/
dist
dist-ssr
*.local

# Ignore todos os arquivos de texto
*.txt

# Ignore arquivos relacionados às chaves de API
.env
.env.local

# Ignore arquivos de configuração de SASS
.sass-cache

# Ignore arquivo do VsCode
.vscode/*
!.vscode/extensions.json
.idea
.DS_store
*.suo
*.ntjsproj
*.sln
*.sw?

```

## Comandos VIM no terminal

Alguns comandos do VIM no terminal.

```
:q	sai do vim
:q!	sai do vim sem salvar
:wq	grava as alterações realizas e sai
:x	grava as alterações e sai
:qa	para sair de todas as edições em curso
```