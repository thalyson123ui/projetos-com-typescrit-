// clase com metodos estáticos
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.calcularAreaCircunferencia = function (raio) {
        return this.PI * raio * raio;
    };
    Matematica.calcularCircunferencia = function (raio) {
        return 2 * this.PI * raio;
    };
    Matematica.PI = 3.1416;
    return Matematica;
}());
// utilizando os métodos estáticos sem instanciar a classe
var raio = 5;
var area = Matematica.calcularAreaCircunferencia(raio);
var circunferencia = Matematica.calcularCircunferencia(raio);
console.log("\u00C1rea da circunfer\u00EAncia com raio ".concat(raio, ": ").concat(area));
console.log("Circunfer\u00EAncia com raio ".concat(raio, ": ").concat(circunferencia));
