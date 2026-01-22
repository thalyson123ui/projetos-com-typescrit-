// herança pt 2 - super e this
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
var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.nome = nome;
    }
    Animal.prototype.mover = function (distanciaEmMetros) {
        if (distanciaEmMetros === void 0) { distanciaEmMetros = 0; }
        console.log("".concat(this.nome, " moveu ").concat(distanciaEmMetros, "m."));
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro(nome) {
        return _super.call(this, nome) || this; // Chama o construtor da classe base (Animal)
    }
    Cachorro.prototype.mover = function (distanciaEmMetros) {
        if (distanciaEmMetros === void 0) { distanciaEmMetros = 5; }
        console.log("Correndo...");
        _super.prototype.mover.call(this, distanciaEmMetros); // Chama o método mover da classe base (Animal)
    };
    return Cachorro;
}(Animal));
var cachorro = new Cachorro("Rex");
cachorro.mover(); // Saída: Correndo... Rex moveu 5m.
