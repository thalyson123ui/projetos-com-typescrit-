var produto1 = {
    nome: "Camiseta",
    preco: 29.99,
    desconto: 0.1
};
var produto2 = {
    nome: "Caneca",
    preco: 15.5
};
// Função para calcular o preço final do produto considerando o desconto
function calcularPrecoFinal(produto) {
    if (produto.desconto) {
        return produto.preco * (1 - produto.desconto);
    }
    return produto.preco;
}
console.log("Pre\u00E7o final do ".concat(produto1.nome, ": R$ ").concat(calcularPrecoFinal(produto1).toFixed(2)));
console.log("Pre\u00E7o final do ".concat(produto2.nome, ": R$ ").concat(calcularPrecoFinal(produto2).toFixed(2)));
