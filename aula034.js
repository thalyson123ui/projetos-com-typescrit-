// namespace + classes
var computador;
(function (computador) {
    var Hardware = /** @class */ (function () {
        function Hardware(tipo, preco) {
            this.tipo = tipo;
            this.preco = preco;
        }
        return Hardware;
    }());
    computador.Hardware = Hardware;
    var Software = /** @class */ (function () {
        function Software(nome, versao) {
            this.nome = nome;
            this.versao = versao;
        }
        return Software;
    }());
    computador.Software = Software;
})(computador || (computador = {}));
var hd = new computador.Hardware("SSD", 500);
var sistema = new computador.Software("Linux", "5.10");
console.log("Hardware: ".concat(hd.tipo, ", Pre\u00E7o: R$").concat(hd.preco));
console.log("Software: ".concat(sistema.nome, ", Vers\u00E3o: ").concat(sistema.versao));
