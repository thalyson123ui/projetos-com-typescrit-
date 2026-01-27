// namespace pt 2
namespace carro {
    export namespace motor {
        export class V8 {
            constructor() {
                console.log('Motor V8 criado!');
            }
        }
    }

    export namespace direcao {
        export class Eletrica {
            constructor() {
                console.log('Direção elétrica criada!');
            }
        }
    }
}

// Usando as classes do namespace carro
let motorV8 = new carro.motor.V8();
let direcaoEletrica = new carro.direcao.Eletrica();