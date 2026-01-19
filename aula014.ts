interface Usuario {
    nome: string;
    idade: number;
}

const mostrarUsuario = (user: Usuario): void => {
    console.log(`Nome: ${user.nome}`);
    console.log(`Idade: ${user.idade}`);
};

mostrarUsuario({ nome: "Thalyson", idade: 22 });
