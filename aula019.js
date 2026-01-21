var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// modificadores de acesso
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    // método público para acessar a idade privada
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    return Pessoa;
}());
var Estudante = /** @class */ (function (_super) {
    __extends(Estudante, _super);
    function Estudante(nome, idade, altura, matricula) {
        var _this = _super.call(this, nome, idade, altura) || this;
        _this.matricula = matricula;
        return _this;
    }
    Estudante.prototype.getAltura = function () {
        return this.altura; // acessando propriedade protegida da classe base
    };
    return Estudante;
}(Pessoa));
var pessoa = new Pessoa("João", 30, 1.75);
console.log(pessoa.nome); // Acessível
console.log(pessoa.getIdade()); // Acessível via método público
// console.log(pessoa.idade); // Erro: Propriedade 'idade' é privada
var estudante = new Estudante("Maria", 20, 1.65, "2023001");
console.log(estudante.nome); // Acessível
console.log(estudante.getAltura()); // Acessível via método público
// console.log(estudante.altura); // Erro: Propriedade 'altura' é protegida
