class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    get negociacoes() {

        return [].concat(this._negociacoes);

    }
}

// Método concat para criar um novo array a partir de um array existente.