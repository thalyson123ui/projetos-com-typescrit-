// funções em interfaces
interface Calculadora {
    somar(a: number, b: number): number;
    subtrair(a: number, b: number): number;
}

class MinhaCalculadora implements Calculadora {
    somar(a: number, b: number): number {
        return a + b;
    }

    subtrair(a: number, b: number): number {
        return a - b;
    }
}

const calc = new MinhaCalculadora();
console.log(calc.somar(5, 3)); // 8
console.log(calc.subtrair(5, 3)); // 2

// propriedades opcionais em interfaces
interface Usuario {
    nome: string;
    idade?: number; // propriedade opcional
}

const usuario1: Usuario = { nome: "Alice", idade: 30 };
const usuario2: Usuario = { nome: "Bob" }; // idade é opcional

console.log(usuario1);
console.log(usuario2);

// index signatures em interfaces
interface Dicionario {
    [chave: string]: string;
}

const meuDicionario: Dicionario = {
    "nome": "Carlos",
    "cidade": "São Paulo"
};

console.log(meuDicionario["nome"]); // Carlos
console.log(meuDicionario["cidade"]); // São Paulo

// herança de interfaces
interface Forma {
    area(): number;
}

interface Retangulo extends Forma {
    largura: number;
    altura: number;
}

class MeuRetangulo implements Retangulo {
    largura: number;
    altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }

    area(): number {
        return this.largura * this.altura;
    }
}

const retangulo = new MeuRetangulo(5, 10);
console.log(retangulo.area()); // 50