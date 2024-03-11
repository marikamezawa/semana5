class SomadorDeNotas {
    constructor() {
        this.total = 0;
    }

    adicionarNota(nota) {
        this.total += nota;
    }

    verTotal() {
        console.log('nota total: ' + this.total + ' pontos');
    }

    
}

const somador = new SomadorDeNotas(); 
somador.adicionarNota(7)
somador.adicionarNota(5)

somador.verTotal();