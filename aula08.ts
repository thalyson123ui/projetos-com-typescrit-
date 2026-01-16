interface Produto {
  nome: string;
  preco: number;
  emEstoque: boolean;
}

const celular: Produto = {
  nome: "Moto G",
  preco: 1200,
  emEstoque: true
};

console.log(celular.nome);
console.log(`Preço: R$ ${celular.preco}`);
