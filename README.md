# Repositório de Estudos

Vou deixar anotado aqui algumas aulas e estudo que estou realizando.

## Algumas anotações relevantes

#### Funçao .map(), transforma um array em outro array.
    

### Reduce => forma da Função reduce sem o arrow function.

O '0.0' => é o valor inicial da função Reduce. Abaixo o link da aula sobre reduce:
https://cursos.alura.com.br/course/javascript-es6-orientacao-a-objetos-parte-1/task/16567


Exemplo:

```
    <td>
    ${model.negociacoes.reduce(function(total, n){
        return total + n.volume;
    }, 0.0)}
    </td>
```

# Criando um Repositório no Git

Usando o **ghCLI** (https://cli.github.com/manual/) instalado com o homebrew.

comando para instalar o **ghCLI** com homebrew.

```
brew install gh
```

Após a instalação do Git CLI, configure sua conta seguindo os passos fornecidos pelo GetStart.

## Criando um Repositório

Link da Documentação:
https://cli.github.com/manual/gh_repo_create

```
gh repo create nome-do-repo --public
```

## Tirando o arquivo .DS_Store do repositório.

Esse comando irá retirar o arquivo .DS_Store do repositorio, caso ele tenha sido comitado.

```
find . -name .DS_Store -print0 | xargs -0 git rm -f --ignore-unmatch
```
