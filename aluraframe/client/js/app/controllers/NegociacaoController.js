class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); // colocando o querySelector dentro de um "alias".

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {

        event.preventDefault();

        // let helper = new DateHelper();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);
        // console.log(DateHelper.dataParaTexto(negociacao.data));

    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0,0;
        this._inputData.focus();
    }

}

// (... = spread operator)
// regEx('/g', '-') => expressão regular para substituir o caracter '-' por ','
// retorna o item do indice par "%" modulo 2, evitando o if acima.
// let data = new Date(this._inputData.value.split('-'));
// "_" no LimpaFormulario e criaNegociacao e para restringir o limpaFormulario ao escopo do NegociacaoController.