function soma(n1, n2) {
    if (n1 === void 0) { n1 = 0; }
    if (n2 === void 0) { n2 = 0; }
    return n1 + n2;
}
console.log(soma(5, 5));
function novoUser(user, pass, nome) {
    console.log("user: ".concat(user));
    console.log("pass: ".concat(pass));
    if (nome) {
        console.log("nome: ".concat(nome));
    }
}
novoUser("thalyson", "1234");
