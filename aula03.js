var Doce = /** @class */ (function () {
    function Doce(sabor, preco) {
        this.sabor = sabor;
        this.preco = preco;
    }
    Doce.prototype.mostrarInfo = function () {
        console.log("Doce de ".concat(this.sabor, " custa R$").concat(this.preco.toFixed(2)));
    };
    Doce.prototype.aplicarDesconto = function (percentual) {
        this.preco -= this.preco * (percentual / 100);
    };
    return Doce;
}());
// Criando objetos
var brigadeiro = new Doce("chocolate", 5);
var beijinho = new Doce("coco", 4);
// Exibindo informações
brigadeiro.mostrarInfo();
beijinho.mostrarInfo();
// Aplicando desconto
brigadeiro.aplicarDesconto(10);
console.log("Após desconto:");
brigadeiro.mostrarInfo();
