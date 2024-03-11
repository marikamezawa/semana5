//questão 7
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(this.nome + ',' + ' ' + this.idade + ' anos');
    }

}

const cachorro = new Animal("Cachorro", 7);
cachorro.descrever();

const gato = new Animal("Gato", 3);
gato.descrever();

