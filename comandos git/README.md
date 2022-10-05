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


```
gh repo create <nomedoProjeto> —public
```