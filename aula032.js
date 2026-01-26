// namespace no TypeScript
var Geometria;
(function (Geometria) {
    var Area;
    (function (Area) {
        function quadrado(lado) {
            return lado * lado;
        }
        Area.quadrado = quadrado;
        function retangulo(base, altura) {
            return base * altura;
        }
        Area.retangulo = retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
    var Perimetro;
    (function (Perimetro) {
        function quadrado(lado) {
            return 4 * lado;
        }
        Perimetro.quadrado = quadrado;
        function retangulo(base, altura) {
            return 2 * (base + altura);
        }
        Perimetro.retangulo = retangulo;
    })(Perimetro = Geometria.Perimetro || (Geometria.Perimetro = {}));
})(Geometria || (Geometria = {}));
// Usando as funções do namespace Geometria
var areaQuadrado = Geometria.Area.quadrado(5);
var perimetroRetangulo = Geometria.Perimetro.retangulo(4, 6);
console.log("\u00C1rea do quadrado: ".concat(areaQuadrado)); // Área do quadrado: 25
console.log("Per\u00EDmetro do ret\u00E2ngulo: ".concat(perimetroRetangulo)); // Perímetro do retângulo: 20
