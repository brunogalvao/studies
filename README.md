# Repositório de Estudos

Vou deixar anotado aqui algumas aulas e estudo que estou realizando.

## Algumas anotações relevantes

#### Funçao .map(), transforma um array em outro array.
    

### Reduce => forma da Função reduce sem o arrow function.

O '0.0' => é o valor inicial da função Reduce. Abaixo o link da aula sobre reduce:
https://cursos.alura.com.br/course/javascript-es6-orientacao-a-objetos-parte-1/task/16567


Exemplo:
````
    <td>
    ${model.negociacoes.reduce(function(total, n){
        return total + n.volume;
    }, 0.0)}
    </td>
```