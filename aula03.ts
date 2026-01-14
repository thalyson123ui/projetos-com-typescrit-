class Doce {
  sabor: string;
  preco: number;

  constructor(sabor: string, preco: number) {
    this.sabor = sabor;
    this.preco = preco;
  }

  mostrarInfo(): void {
    console.log(`Doce de ${this.sabor} custa R$${this.preco.toFixed(2)}`);
  }

  aplicarDesconto(percentual: number): void {
    this.preco -= this.preco * (percentual / 100);
  }
}

// Criando objetos
const brigadeiro = new Doce("chocolate", 5);
const beijinho = new Doce("coco", 4);

// Exibindo informações
brigadeiro.mostrarInfo();
beijinho.mostrarInfo();

// Aplicando desconto
brigadeiro.aplicarDesconto(10);

console.log("Após desconto:");
brigadeiro.mostrarInfo();
