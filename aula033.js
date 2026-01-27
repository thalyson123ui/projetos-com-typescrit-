// namespace pt 2
var carro;
(function (carro) {
    var motor;
    (function (motor) {
        var V8 = /** @class */ (function () {
            function V8() {
                console.log('Motor V8 criado!');
            }
            return V8;
        }());
        motor.V8 = V8;
    })(motor = carro.motor || (carro.motor = {}));
    var direcao;
    (function (direcao) {
        var Eletrica = /** @class */ (function () {
            function Eletrica() {
                console.log('Direção elétrica criada!');
            }
            return Eletrica;
        }());
        direcao.Eletrica = Eletrica;
    })(direcao = carro.direcao || (carro.direcao = {}));
})(carro || (carro = {}));
// Usando as classes do namespace carro
var motorV8 = new carro.motor.V8();
var direcaoEletrica = new carro.direcao.Eletrica();
