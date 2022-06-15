class Negociacao {
    
    constructor(data, quantidade, valor) {

        // Para não alterar os valores passados, temos que deixar os valores somente leitura
        // Para isso, usamos o underline '_' deixando Privados

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        // Impede que o valor seja alterado deixando Imutável a negociação
        Object.freeze(this);

    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade; 
    } 

    get valor() {
        return this._valor;
    }

}

/*

Para criarmos uma classe, usamos a palavra reservada class seguida do nome da classe. Por convenção, nomes de classe começam em letra maiúscula. Curiosamente essa convenção se chama pascal case.

Exemplo: class Pessoas

*/

/*
Para definirmos atributos de instância de uma classe, precisamos adicionar em sua definição um constructor. É através do construtor que adicionamos na variável implícita this as propriedades que desejamos que toda instância da classe tenha.

class Pessoa {

    constructor() {

        this.nome = '';
        this.idade = 0;
    }
}

*/


/*
Exemplo de Classe
class Calopsita {

    constructor(nome, raca) {

        this.nome = nome;
        this.raca = raca;
    }

    tipoPassaro() {
        return(
            this.nome + ' ' + this.raca
        )
    }
}
*/