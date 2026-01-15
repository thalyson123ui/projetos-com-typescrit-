// Definindo uma função simples
function saudacao(nome: string): string {
  return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}

// Variáveis tipadas
let idade: number = 20;
let nome: string = "João";
let ativo: boolean = true;

// Usando a função
console.log(saudacao(nome));
console.log(`Idade: ${idade}`);
console.log(`Usuário ativo: ${ativo}`);
