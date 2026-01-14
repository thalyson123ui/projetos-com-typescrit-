var Doces = /** @class */ (function () {
    function Doces(sabor, preço) {
        this.sabor = sabor;
        this.preço = preço;
    }
    return Doces;
}());
var brigadeiro = new Doces("chocolate", 5);
var beijinho = new Doces("coco", 4);
console.log("O sabor do brigadeiro \u00E9 ".concat(brigadeiro.sabor, " e o pre\u00E7o \u00E9 R$").concat(brigadeiro.preço));
console.log("O sabor do beijinho \u00E9 ".concat(beijinho.sabor, " e o pre\u00E7o \u00E9 R$").concat(beijinho.preço));
