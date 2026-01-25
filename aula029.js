// generics em TypeScript
function echo(obj) {
    return obj;
}
console.log(echo(27));
console.log(echo("Olá, TypeScript!"));
console.log(echo(true));
// Usando generics com arrays
function imprimirArray(arr) {
    arr.forEach(function (item) { return console.log(item); });
}
imprimirArray([1, 2, 3, 4, 5]);
imprimirArray(["a", "b", "c"]);
var caixaDeNumero = { conteudo: 100 };
var caixaDeString = { conteudo: "Generics" };
console.log(caixaDeNumero);
console.log(caixaDeString);
// Usando generics com classes
var Pilha = /** @class */ (function () {
    function Pilha() {
        this.elementos = [];
    }
    Pilha.prototype.push = function (elemento) {
        this.elementos.push(elemento);
    };
    Pilha.prototype.pop = function () {
        return this.elementos.pop();
    };
    return Pilha;
}());
var pilhaDeNumeros = new Pilha();
pilhaDeNumeros.push(10);
pilhaDeNumeros.push(20);
console.log(pilhaDeNumeros.pop());
console.log(pilhaDeNumeros.pop());
var pilhaDeStrings = new Pilha();
pilhaDeStrings.push("TypeScript");
pilhaDeStrings.push("Generics");
console.log(pilhaDeStrings.pop());
console.log(pilhaDeStrings.pop());
// Usando generics com restrições
function maiorValor(a, b) {
    return a > b ? a : b;
}
console.log(maiorValor(10, 20));
console.log(maiorValor("apple", "banana"));
