// Array comum (pode ser modificado)
let frutas: Array<string> = ["Maçã", "Banana", "Uva"];

// Também pode ser escrito assim:
let numeros: number[] = [1, 2, 3];

// Modificando o array
frutas.push("Laranja");
numeros[0] = 10;

console.log(frutas);   // ["Maçã", "Banana", "Uva", "Laranja"]
console.log(numeros);  // [10, 2, 3]
