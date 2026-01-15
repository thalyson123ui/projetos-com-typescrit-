// Exemplo de Classe
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.apresentar = function () {
        return "Ol\u00E1, meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos");
    };
    return Pessoa;
}());
// Função genérica
function obterPrimeiro(lista) {
    return lista[0];
}
// Exemplo de uso
var usuario1 = {
    id: 1,
    nome: "João Silva",
    email: "joao@email.com",
    ativo: true
};
var pessoa = new Pessoa("Maria", 25);
console.log(pessoa.apresentar());
console.log(usuario1);
var numeros = [1, 2, 3, 4, 5];
console.log("Primeiro número:", obterPrimeiro(numeros));
var palavras = ["TypeScript", "JavaScript", "Python"];
console.log("Primeira palavra:", obterPrimeiro(palavras));
