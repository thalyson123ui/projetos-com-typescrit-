// Definindo um enum
enum StatusPedido {
  Pendente = "PENDENTE",
  Processando = "PROCESSANDO",
  Enviado = "ENVIADO",
  Entregue = "ENTREGUE",
  Cancelado = "CANCELADO"
}

// Interface usando o enum
interface Pedido {
  id: number;
  produto: string;
  status: StatusPedido;
}

// Função que muda o status do pedido
function atualizarStatus(pedido: Pedido, novoStatus: StatusPedido): void {
  pedido.status = novoStatus;
  console.log(`Pedido ${pedido.id} agora está ${pedido.status}`);
}

// Exemplo de uso

// Criando um pedido inicial
let pedido1: Pedido = {
  id: 1,
  produto: "Notebook",
  status: StatusPedido.Pendente
};

// Usando o enum para atualizar o status
atualizarStatus(pedido1, StatusPedido.Processando);
atualizarStatus(pedido1, StatusPedido.Enviado);
atualizarStatus(pedido1, StatusPedido.Entregue);
