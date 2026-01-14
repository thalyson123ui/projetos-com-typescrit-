var Doce = /** @class */ (function () {
    function Doce(sabor, preco) {
        this.sabor = sabor;
        this.preco = preco;
    }
    return Doce;
}());
var brigadeiro = new Doce("chocolate", 5);
var beijinho = new Doce("coco", 4);
console.log("O sabor do brigadeiro \u00E9 ".concat(brigadeiro.sabor, " e o pre\u00E7o \u00E9 R$").concat(brigadeiro.preco));
console.log("O sabor do beijinho \u00E9 ".concat(beijinho.sabor, " e o pre\u00E7o \u00E9 R$").concat(beijinho.preco));
