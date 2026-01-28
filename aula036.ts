// desestrututração de arrays parte 2

const notas: number[] = [6.7, 7.4, 9.8, 8.1, 7.7]

// const [nota1, nota2, nota3, nota4, nota5] = notas
// console.log(nota1, nota2, nota3, nota4, nota5)

// const [nota1, , nota3, , nota5] = notas
// console.log(nota1, nota3, nota5)

const [nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0, nota5 = 0, nota6 = 0] = notas
console.log(nota1, nota2, nota3, nota4, nota5, nota6)