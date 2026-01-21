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
// herança em orientação a objeto pt 2
var celular = /** @class */ (function () {
    function celular(cor, tamanho) {
        this.cor = cor;
        this.tamanho = tamanho;
        this.ligado = false;
    }
    celular.prototype.ligar = function () {
        this.ligado = true;
        console.log("Celular ligado");
    };
    celular.prototype.desligar = function () {
        this.ligado = false;
        console.log("Celular desligado");
    };
    return celular;
}());
var smartphone = /** @class */ (function (_super) {
    __extends(smartphone, _super);
    function smartphone(cor, tamanho, camera) {
        var _this = _super.call(this, cor, tamanho) || this;
        _this.camera = camera;
        return _this;
    }
    smartphone.prototype.tirarFoto = function () {
        if (this.camera) {
            console.log("Foto tirada com a c\u00E2mera de ".concat(this.camera, "MP"));
        }
        else {
            console.log("O celular está desligado. Ligue-o para tirar fotos.");
        }
    };
    return smartphone;
}(celular));
var meuSmartphone = new smartphone("preto", "6.5 polegadas", 48);
meuSmartphone.ligar();
meuSmartphone.tirarFoto();
meuSmartphone.desligar();
