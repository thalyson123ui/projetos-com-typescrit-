// Definindo um enum
var StatusPedido;
(function (StatusPedido) {
    StatusPedido["Pendente"] = "PENDENTE";
    StatusPedido["Processando"] = "PROCESSANDO";
    StatusPedido["Enviado"] = "ENVIADO";
    StatusPedido["Entregue"] = "ENTREGUE";
    StatusPedido["Cancelado"] = "CANCELADO";
})(StatusPedido || (StatusPedido = {}));
// Função que muda o status do pedido
function atualizarStatus(pedido, novoStatus) {
    pedido.status = novoStatus;
    console.log("Pedido ".concat(pedido.id, " agora est\u00E1 ").concat(pedido.status));
}
// Criando um pedido
var pedido1 = {
    id: 1,
    produto: "Notebook",
    status: StatusPedido.Pendente
};
// Usando o enum
atualizarStatus(pedido1, StatusPedido.Processando);
atualizarStatus(pedido1, StatusPedido.Enviado);
atualizarStatus(pedido1, StatusPedido.Entregue);
