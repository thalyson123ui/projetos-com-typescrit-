// desestruturação em typescript
var produto = {
    nome: "Smartphone",
    preco: 699.99,
    detalhes: {
        peso: 0.4,
        fabricante: "TechCorp"
    }
};
// Desestruturação de objeto
var nome = produto.nome, preco = produto.preco, _a = produto.detalhes, peso = _a.peso, fabricante = _a.fabricante;
console.log("Nome: ".concat(nome)); // Nome: Smartphone
console.log("Pre\u00E7o: ".concat(preco)); // Preço: 699.99
console.log("Peso: ".concat(peso, " kg")); // Peso: 0.4 kg
console.log("Fabricante: ".concat(fabricante)); // Fabricante: TechCorp
// Desestruturação em parâmetros de função
function exibirDetalhes(_a) {
    var nome = _a.nome, preco = _a.preco, _b = _a.detalhes, peso = _b.peso, fabricante = _b.fabricante;
    console.log("Produto: ".concat(nome, ", Pre\u00E7o: ").concat(preco, ", Peso: ").concat(peso, " kg, Fabricante: ").concat(fabricante));
}
exibirDetalhes(produto); // Produto: Smartphone, Preço: 699.99, Peso: 0.4 kg, Fabricante: TechCorp
// Desestruturação de arrays
var numeros = [10, 20, 30, 40, 50];
var primeiro = numeros[0], segundo = numeros[1], resto = numeros.slice(2);
console.log("Primeiro: ".concat(primeiro)); // Primeiro: 10
console.log("Segundo: ".concat(segundo)); // Segundo: 20
console.log("Resto: ".concat(resto)); // Resto: 30,40,50
