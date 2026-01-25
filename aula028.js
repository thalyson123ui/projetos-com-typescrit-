var MinhaCalculadora = /** @class */ (function () {
    function MinhaCalculadora() {
    }
    MinhaCalculadora.prototype.somar = function (a, b) {
        return a + b;
    };
    MinhaCalculadora.prototype.subtrair = function (a, b) {
        return a - b;
    };
    return MinhaCalculadora;
}());
var calc = new MinhaCalculadora();
console.log(calc.somar(5, 3)); // 8
console.log(calc.subtrair(5, 3)); // 2
var usuario1 = { nome: "Alice", idade: 30 };
var usuario2 = { nome: "Bob" }; // idade é opcional
console.log(usuario1);
console.log(usuario2);
var meuDicionario = {
    "nome": "Carlos",
    "cidade": "São Paulo"
};
console.log(meuDicionario["nome"]); // Carlos
console.log(meuDicionario["cidade"]); // São Paulo
var MeuRetangulo = /** @class */ (function () {
    function MeuRetangulo(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    MeuRetangulo.prototype.area = function () {
        return this.largura * this.altura;
    };
    return MeuRetangulo;
}());
var retangulo = new MeuRetangulo(5, 10);
console.log(retangulo.area()); // 50
