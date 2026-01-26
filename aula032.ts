// namespace no TypeScript
namespace Geometria {
    export namespace Area {
        export function quadrado(lado: number): number {
            return lado * lado;
        }

        export function retangulo(base: number, altura: number): number {
            return base * altura;
        }
    }

    export namespace Perimetro {
        export function quadrado(lado: number): number {
            return 4 * lado;
        }

        export function retangulo(base: number, altura: number): number {
            return 2 * (base + altura);
        }
    }
}

// Usando as funções do namespace Geometria
const areaQuadrado = Geometria.Area.quadrado(5);
const perimetroRetangulo = Geometria.Perimetro.retangulo(4, 6);

console.log(`Área do quadrado: ${areaQuadrado}`); // Área do quadrado: 25
console.log(`Perímetro do retângulo: ${perimetroRetangulo}`); // Perímetro do retângulo: 20