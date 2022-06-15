class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {

        event.preventDefault();

        let data = new Date(...this._inputData.value
            .split('-')
            .map((item, indice) => item - indice % 2)
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);

        // console.log(negociacao);

        // Adicionar a negociacao na lista de negociacoes

    }

}

        //(... = spread operator)
        //expressão regular para substituir o caracter '-' por ','
        // retorna o item do indice par "%" modulo 2, evitando o if acima.
        // let data = new Date(this._inputData.value.split('-'));