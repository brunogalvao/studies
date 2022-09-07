# Estrutura de dados

E uma maneira de ordenar informações como textos, números, boleanos, etc e registrá-los na memória do computador.

//Array
[1,2,3,4,5,6,7,8,9,10] => Elementos 1,2,3,4,5,6,7,8,9,10

//Object
{name: "José", idade: 51} => Elementos name: "José", idade: 51 (key: value)

## Gerenciamento de dados
1. Modelar a Estrutura
2. Dar vida à Estrutura
3. Criar as funcionalidades dessa estrutura.


## Arrays
Array, vetor ou arranjo, é uma estrutura amplamente ultilizada e implementada em muitas linguagens de programação.

[ 'a', 10, 'd', true] total de elementos 4
   0,  1,   2,  3     posição no array


## Características

````
    - Acesso pelo index;
    - Respeita a ordem de inserção dos elementos;
    - Aceita valores duplicados;
    - Dependendo do tamanho do Array, para encontrar o elemento, é necessário percorrer todo o Array e também será necessário uma performace maior;
````
# Arrays no JavaScript
`````
- São dinâmicos;
- Você poderá ter dados misturados de outro tipo de Array dentro do Array;
- Existem muitos métodos já implementados
    - push(), pop(), find(), filter(), map(), reduce(), forEach(), etc;
`````

# Matriz
    Matriz ou vetor multidimencional.
    Significa que um array pode conter outros arrays.
    Poderemos ter muitos níveis.

# Stack
    Traduzido como pilha, é uma estrutura de dados que segue a ordem de inserção dos elementos.
    - linear, um após o outro;
    - o último elemento inserido é o primeiro a ser removido;

`````
    # Conceito 
    LIFO - Last In First Out
        - Último a entrar é o primeiro a sair;
`````

    - push() - Adciona um elemento no final do Array;
    - pop() - Remove o último elemento do Array;
    - peek() - Obeter o elemento do topo da pilha;

    Outros métodos poderão ser implementados como size() para mostrar o tamanho da pilha, isEmpty() para verificar se a pilha está vazia, etc.

# Queue
    Tradução de Queue e fila.

    Como uma fila de uma loja ou restaurante.

    ````
        - linear
        - O priemiro a entrar na fila e o primeiro a sair.
    ````
    # Conceito 
    - FIFO - First In First Out
        - Primeiro a entrar é o primeiro a sair;
    - Front (frente) é a referencia do primeiro elemento a entrar na fila;
    - Back (trás) é a referencia do último elemento a entrar na fila;

    # Metodos Fundamentais
        - enqueue() - Adiciona um elemento no final da fila;
        - dequeue() - Remove o primeiro elemento da fila;

    Outros métodos poderão ser implementados como size() para mostrar o tamanho da fila ou front() para pegar o primeiro elemento da fila, dentre outros.
    