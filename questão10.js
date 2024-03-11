// classe Funcionário
class Funcionario { 
    // construcotor da classe Funcionário
    constructor(nome, idade, salarioBase) { 
        //atributos da classe Funcionário
        this.nome = nome;
        this.idade = idade;
        this.salarioBase = salarioBase;
    }

   
    }



// classe Professor com herança à classe Funcionário
class Professor extends Funcionario {
    // método da classe
    constructor(nome, idade, salarioBase, disciplina, horasAulaSemana, valorHorasAula) {
       // chama o construtor da classe Funcionário
        super(nome,idade,salarioBase);
        // atributos da classe Professor
        this.disciplica = disciplina;
        this.horasAulaSemana = horasAulaSemana;
        this.valorHorasAula = valorHorasAula;

    }
    // método para calcular o salario total
    calcularSalario() {
        // cálculo do salário total
        this.salarioT = this.salarioBase + (this.horasAulaSemana * this.valorHorasAula)
        // imprime as informações colocadas
        console.log(this.nome + ' tem ' + this.idade + ' anos' + ' e ganha ' + this.salarioT );
    }

}

// objetos do tipo professor
const professor1 = new Professor('Mariana', 28, 2000, 'programação', 10, 80);
professor1.calcularSalario(); 

const professor2 = new Professor('Diene', 40, 3000, 'química', 15, 50);
professor2.calcularSalario();