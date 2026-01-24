// classes abstratas e parametros genéricos
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
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(saldo) {
        this.saldo = saldo;
    }
    ContaBancaria.prototype.mostrarSaldo = function () {
        return this.saldo;
    };
    return ContaBancaria;
}());
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaCorrente.prototype.depositar = function (valor) {
        this.saldo += valor;
        console.log("Dep\u00F3sito de R$".concat(valor, " realizado. Novo saldo: R$").concat(this.saldo));
    };
    ContaCorrente.prototype.sacar = function (valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente para saque.');
        }
        else {
            this.saldo -= valor;
            console.log("Saque de R$".concat(valor, " realizado. Novo saldo: R$").concat(this.saldo));
        }
    };
    return ContaCorrente;
}(ContaBancaria));
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContaPoupanca.prototype.depositar = function (valor) {
        this.saldo += valor;
        console.log("Dep\u00F3sito de R$".concat(valor, " realizado. Novo saldo: R$").concat(this.saldo));
    };
    ContaPoupanca.prototype.sacar = function (valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente para saque.');
        }
        else {
            this.saldo -= valor;
            console.log("Saque de R$".concat(valor, " realizado. Novo saldo: R$").concat(this.saldo));
        }
    };
    return ContaPoupanca;
}(ContaBancaria));
// Exemplo de uso
var contaCorrente = new ContaCorrente(1000);
contaCorrente.depositar(500);
contaCorrente.sacar(200);
console.log("Saldo final da Conta Corrente: R$".concat(contaCorrente.mostrarSaldo()));
var contaPoupanca = new ContaPoupanca(2000);
contaPoupanca.depositar(300);
contaPoupanca.sacar(2500);
console.log("Saldo final da Conta Poupan\u00E7a: R$".concat(contaPoupanca.mostrarSaldo()));
