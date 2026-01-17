// null - undefined

let minhaVar: null = null;
let varIndefinida: undefined = undefined;
let varNumero: number = 42;

// Atribuições válidas
minhaVar = null;
varIndefinida = undefined;

// Atribuições inválidas (descomente para ver os erros)
// minhaVar = 10; // Erro: Tipo 'number' não pode ser atribuído ao tipo 'null'.
// varIndefinida = "texto"; // Erro: Tipo 'string' não pode ser atribuído ao tipo 'undefined'.
// varNumero = null; // Erro: Tipo 'null' não pode ser atribuído ao tipo 'number'.

console.log(minhaVar);
console.log(varIndefinida);