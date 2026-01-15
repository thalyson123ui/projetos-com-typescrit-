// Exemplo de Classe
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
  }
}

// Função que exibe um resultado
function exibirResultado(valor) {
  console.log("Resultado:", valor);
}

// Função que retorna o primeiro item do array
function obterPrimeiro(lista) {
  return lista[0];
}

// Exemplo de uso
const usuario1 = {
  id: 1,
  nome: "João Silva",
  email: "joao@email.com",
  ativo: true
};

const pessoa = new Pessoa("Maria", 25);
console.log(pessoa.apresentar());
console.log(usuario1);

const numeros = [1, 2, 3, 4, 5];
exibirResultado(obterPrimeiro(numeros) ?? 0);

const palavras = ["TypeScript", "JavaScript", "Python"];
exibirResultado(obterPrimeiro(palavras) ?? "Nenhuma palavra");
