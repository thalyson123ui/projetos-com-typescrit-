// Exemplo de Interface
interface Usuario {
  id: number;
  nome: string;
  email: string;
  ativo: boolean;
}

// Exemplo de Classe
class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
  }
}

// Exemplo de Type Union
type Resultado = string | number | boolean;

// Função genérica
function obterPrimeiro<T>(lista: T[]): T | undefined {
  return lista[0];
}

// Exemplo de uso
const usuario1: Usuario = {
  id: 1,
  nome: "João Silva",
  email: "joao@email.com",
  ativo: true
};

const pessoa = new Pessoa("Maria", 25);
console.log(pessoa.apresentar());
console.log(usuario1);

const numeros = [1, 2, 3, 4, 5];
console.log("Primeiro número:", obterPrimeiro(numeros));

const palavras = ["TypeScript", "JavaScript", "Python"];
console.log("Primeira palavra:", obterPrimeiro(palavras));
