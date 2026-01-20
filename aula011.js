// type assertion.ts
var valorDesconocido = "Hola, TypeScript!";
// Usando type assertion para indicar que conocemos el tipo real
var longitudDelString = valorDesconocido.length;
console.log("La longitud del string es: ".concat(longitudDelString));
// Otra forma de type assertion usando la sintaxis de ángulo
var longitudDelString2 = valorDesconocido.length;
console.log("La longitud del string (usando \u00E1ngulo) es: ".concat(longitudDelString2));
