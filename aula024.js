// herança parte 3 - protected
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
    function Pessoa(nome) {
        this.nome = nome;
    }
    return Pessoa;
}());
var Aluno = /** @class */ (function (_super) {
    __extends(Aluno, _super);
    function Aluno(nome, matricula) {
        var _this = _super.call(this, nome) || this;
        _this.matricula = matricula;
        return _this;
    }
    Aluno.prototype.apresentar = function () {
        console.log("Nome: ".concat(this.nome, ", Matr\u00EDcula: ").concat(this.matricula));
    };
    return Aluno;
}(Pessoa));
var aluno1 = new Aluno("Maria", 12345);
aluno1.apresentar(); // Nome: Maria, Matrícula: 12345
// A linha abaixo causaria um erro de compilação, pois 'nome' é protegido
// console.log(aluno1.nome);
