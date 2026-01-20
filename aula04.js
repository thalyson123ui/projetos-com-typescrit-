// Definindo uma função simples
function saudacao(nome) {
    return "Ol\u00E1, ".concat(nome, "! Bem-vindo ao TypeScript.");
}
// Variáveis tipadas
var idade = 20;
var nome = "João";
var ativo = true;
// Usando a função
console.log(saudacao(nome));
console.log("Idade: ".concat(idade));
console.log("Usu\u00E1rio ativo: ".concat(ativo));
