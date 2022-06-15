class DateHelper {

    constructor() {
        throw new Error('Esta classe não pode ser instanciada...');
    }

    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
    
    static textoParaData(texto) {

        if (!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error ('Deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }
    
}

// classe com metodo estatico, não precisa instanciar a classe

// data.getDate()
//     + '/' + (data.getMonth() + 1)
//     + '/' + data.getFullYear();

// no metodo "dataParaTexto" foi usado o template String, que permite usar variaveis dentro do texto sem interpolação.

// if (/\d{4}-\d{2}-\d{2}/.test(texto)) // expressão regular para validar o formato da data
