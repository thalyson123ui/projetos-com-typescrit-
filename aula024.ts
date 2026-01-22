// herança parte 3 - protected

class Pessoa {
    protected nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

class Aluno extends Pessoa {
    private matricula: number;

    constructor(nome: string, matricula: number) {
        super(nome);
        this.matricula = matricula;
    }

    public apresentar(): void {
        console.log(`Nome: ${this.nome}, Matrícula: ${this.matricula}`);
    }
}

const aluno1 = new Aluno("Maria", 12345);
aluno1.apresentar(); // Nome: Maria, Matrícula: 12345

// A linha abaixo causaria um erro de compilação, pois 'nome' é protegido
// console.log(aluno1.nome);