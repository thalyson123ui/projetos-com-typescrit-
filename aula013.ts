function soma(n1: number = 0, n2: number = 0): number {
    return n1 + n2;
}

console.log(soma(5, 5));

function novoUser(user: string, pass: string, nome?: string): void {
    console.log(`user: ${user}`);
    console.log(`pass: ${pass}`);

    if (nome) {
        console.log(`nome: ${nome}`);
    }
}

novoUser("thalyson", "1234");
