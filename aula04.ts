// Exemplo de Interface
interface Usuario {
  readonly id: number;
  nome: string;
  email: string;
  ativo: boolean;
}

// Exemplo de Classe
class Pessoa {
  constructor(
    public nome: string,
    public idade: number
  ) {}

  apresentar(): string {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
  }
}

// Exemplo de Type Union (agora usado)
type Resultado = string | number | boolean;

// Função que retorna um Resultado
function exibirResultado(valor: Resultado): void {
  console.log("Resultado:", valor);
}

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

const numeros: number[] = [1, 2, 3, 4, 5];
exibirResultado(obterPrimeiro(numeros) ?? 0);

const palavras: string[] = ["TypeScript", "JavaScript", "Python"];
exibirResultado(obterPrimeiro(palavras) ?? "Nenhuma palavra");
