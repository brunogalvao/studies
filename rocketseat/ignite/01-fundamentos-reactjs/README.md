# Anotações

3. Sobre Bundlers & Compilers, assinale a alternativa correta

Resposta correta
> O Babel é um exemplo de compiler para JS bem famoso e sua principal função é pegar sintaxes mais atuais do JS e converter para um código compatível com os Browsers.


# Programação imperativa

O que deve ser feito(passo a passo).

## Receita de Bolo

1. ligar o forno;
2. Abrir a porta do forno...

# Programação declarativa (React sempre se usa)

Quais as condições para eu atingir o resultado final.

## Receita de Bolo

1. O Forno precisa estar ligado;
2. Quando o forno estiver quente, eu posso colocar a massa para assar;
3. QUando a massa estiver pronta, eu posso retira-la do forno.

# Key no React

## Por que única?
3 momentos em que um compomente é renderizado novamente.

1. Quando o estado altera;
2. Quando a propriedade altera;
3. Quando um componente pai renderiza novamente.

______

## Porque não usar o índice do array ?
```
const posts = [1,2,3,4]

```

# Funcionamente dentro do evento.
Cuidando em executar uma função em um envento Ex. onClick, onChange... com a execução de uma função '()'. Isso ocorrera em um loop desnecessário.

- Sempre declarar a função e apenas declarar ela no evento (sem os parenteces).

# Clousers no React

```JS

function Comment() {
    const [ likes, setLikes ] = useState(0);

    function addLike() {
        setLikes(likes + 1)
    }
}

Comment(props, 1)

```


Sempre que for atualizar uma informação, e essa informação depende do valor anterior, sempre ultilize uma função como no Exemplo:

Ex.

```

function handleLikeComment() {
    setLikeCount((state) => {
        return state + 1;
    });
}

```

# Usando TypeScript
