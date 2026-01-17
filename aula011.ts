// type assertion.ts
let valorDesconocido: unknown = "Hola, TypeScript!";

// Usando type assertion para indicar que conocemos el tipo real
let longitudDelString: number = (valorDesconocido as string).length;

console.log(`La longitud del string es: ${longitudDelString}`);

// Otra forma de type assertion usando la sintaxis de ángulo
let longitudDelString2: number = (<string>valorDesconocido).length;

console.log(`La longitud del string (usando ángulo) es: ${longitudDelString2}`);