
class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }

    _template(model) {
        return `
        <table class="table table table-striped">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.negociacoes.map(n => `
                    
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>

                    `).join('')}
            </tbody>

            <tfoot>
                <td colspan="3">
                    Total do Volume
                </td>
                <td>${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)
                }</td>
                </tfoot>
                </table>`;
    }
}
        
    
    //  No final da função da linha 41 abrindo e fechando os parentes, estamos invocando função IIFE
    
    // (function() {
    //     let total = 0;
    //     model.negociacoes.forEach(n => total += n.volume);
    //     return total;
    // })()