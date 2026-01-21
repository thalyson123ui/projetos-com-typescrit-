// herança em orientação a objetos
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
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.apresentar = function () {
        return "Ol\u00E1, meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos.");
    };
    return Pessoa;
}());
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(nome, idade, curso) {
        var _this = _super.call(this, nome, idade) || this;
        _this.curso = curso;
        return _this;
    }
    Aluno.prototype.apresentar = function () {
        return "".concat(_super.prototype.apresentar.call(this), " Estou cursando ").concat(this.curso, ".");
    };
    return Aluno;
}(Pessoa));
var pessoa1 = new Pessoa("Ana", 30);
console.log(pessoa1.apresentar());
var aluno1 = new Aluno("Carlos", 20, "Engenharia");
console.log(aluno1.apresentar());
