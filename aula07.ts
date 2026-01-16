// TUPLAS EM TYPESCRIPT

// 2. Tupla com nomes (labeled tuples)
type Pessoa = [nome: string, idade: number, ativo: boolean];
const usuario: Pessoa = ["João", 30, true];
console.log("Pessoa:", usuario);
console.log("Nome:", usuario[0], "Idade:", usuario[1]);