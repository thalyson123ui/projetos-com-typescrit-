// classes abstratas e parametros genéricos

abstract class ContaBancaria<T> {
    constructor(public saldo: T) {}

    abstract depositar(valor: T): void;

    abstract sacar(valor: T): void;

    mostrarSaldo(): T {
        return this.saldo;
    }
}

class ContaCorrente extends ContaBancaria<number> {
    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }

    sacar(valor: number): void {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente para saque.');
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        }
    }
}

class ContaPoupanca extends ContaBancaria<number> {
    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
    }

    sacar(valor: number): void {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente para saque.');
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`);
        }
    }
}

// Exemplo de uso
const contaCorrente = new ContaCorrente(1000);
contaCorrente.depositar(500);
contaCorrente.sacar(200);
console.log(`Saldo final da Conta Corrente: R$${contaCorrente.mostrarSaldo()}`);

const contaPoupanca = new ContaPoupanca(2000);
contaPoupanca.depositar(300);
contaPoupanca.sacar(2500);
console.log(`Saldo final da Conta Poupança: R$${contaPoupanca.mostrarSaldo()}`);