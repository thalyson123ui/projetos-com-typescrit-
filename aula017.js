var car = /** @class */ (function () {
    function car(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    car.prototype.exibirDetalhes = function () {
        console.log("Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Ano: ").concat(this.ano));
    };
    return car;
}());
