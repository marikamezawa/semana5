//questão 8
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(this.nome + ',' + ' ' + this.idade + ' anos');
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
    super(nome, idade);
    this.cor = cor;
    }

    miar() {
        console.log('Este ' + this.nome + ' ' + this.cor + ' faz miau');
    }
}

const cachorro = new Animal('cachorro', 6);
cachorro.descrever();

const gato = new Gato('gato', 5, 'laranja');
gato.descrever();
gato.miar()