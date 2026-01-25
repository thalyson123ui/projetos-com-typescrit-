// generics em TypeScript

function echo<T>(obj: T): T {
    return obj;
}

console.log(echo<number>(27));
console.log(echo<string>("Olá, TypeScript!"));
console.log(echo<boolean>(true));

// Usando generics com arrays
function imprimirArray<T>(arr: T[]): void {
    arr.forEach((item) => console.log(item));
}

imprimirArray<number>([1, 2, 3, 4, 5]);
imprimirArray<string>(["a", "b", "c"]);

// Usando generics com interfaces
interface Caixa<T> {
    conteudo: T;
}

const caixaDeNumero: Caixa<number> = { conteudo: 100 };
const caixaDeString: Caixa<string> = { conteudo: "Generics" };

console.log(caixaDeNumero);
console.log(caixaDeString);

// Usando generics com classes
class Pilha<T> {
    private elementos: T[] = [];

    push(elemento: T): void {
        this.elementos.push(elemento);
    }

    pop(): T | undefined {
        return this.elementos.pop();
    }
}

const pilhaDeNumeros = new Pilha<number>();
pilhaDeNumeros.push(10);
pilhaDeNumeros.push(20);
console.log(pilhaDeNumeros.pop());
console.log(pilhaDeNumeros.pop());

const pilhaDeStrings = new Pilha<string>();
pilhaDeStrings.push("TypeScript");
pilhaDeStrings.push("Generics");
console.log(pilhaDeStrings.pop());
console.log(pilhaDeStrings.pop());

// Usando generics com restrições
function maiorValor<T extends number | string>(a: T, b: T): T {
    return a > b ? a : b;
}

console.log(maiorValor<number>(10, 20));
console.log(maiorValor<string>("apple", "banana"));