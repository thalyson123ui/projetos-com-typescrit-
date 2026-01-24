// metodo getter e setter
var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this._idade = 0;
    }
    Object.defineProperty(Pessoa.prototype, "idade", {
        get: function () {
            console.log('Getter chamado');
            return this._idade;
        },
        set: function (valor) {
            console.log('Setter chamado');
            if (valor >= 0 && valor <= 120) {
                this._idade = valor;
            }
            else {
                console.log('Idade inválida');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
var pessoa1 = new Pessoa();
pessoa1.idade = 25; // Chama o setter
console.log(pessoa1.idade); // Chama o getter
pessoa1.idade = -5; // Tenta definir uma idade inválida
