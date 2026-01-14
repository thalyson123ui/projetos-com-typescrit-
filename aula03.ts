class Doce {
  constructor(public sabor: string, public preco: number) {}
}

const brigadeiro = new Doce("chocolate", 5);
const beijinho = new Doce("coco", 4);

console.log(`O sabor do brigadeiro é ${brigadeiro.sabor} e o preço é R$${brigadeiro.preco}`);
console.log(`O sabor do beijinho é ${beijinho.sabor} e o preço é R$${beijinho.preco}`);
