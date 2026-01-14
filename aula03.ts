class Doces {
    constructor(public sabor: string, public preço: number) {
    }
}

const brigadeiro = new Doces("chocolate", 5);
const beijinho = new Doces("coco", 4);

console.log(`O sabor do brigadeiro é ${brigadeiro.sabor} e o preço é R$${brigadeiro.preço}`);
console.log(`O sabor do beijinho é ${beijinho.sabor} e o preço é R$${beijinho.preço}`);