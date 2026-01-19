async function main() {
  const usuarios = await buscarUsuarios();
  console.log("Usuários:", usuarios);

  const novoUsuario: Usuario = {
    id: 11,
    nome: "Thalyson",
    email: "thalyson@email.com",
    ativo: true
  };

  const criado = await criarUsuario(novoUsuario);
  console.log("Criado:", criado);

  const atualizado = await atualizarUsuario(criado, {
    nome: "Thalyson Silva",
    ativo: false
  });

  console.log("Atualizado:", atualizado);
}

main();
