function jogoDaVelha(tabuleiro) {
    // Verifica linhas e colunas
    for (var i = 0; i < 3; i++) {
        if (tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2]) {
            if (tabuleiro[i][0] !== '')
                return tabuleiro[i][0];
        }
        if (tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro[2][i]) {
            if (tabuleiro[0][i] !== '')
                return tabuleiro[0][i];
        }
    }
    // Verifica diagonais
    if (tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]) {
        if (tabuleiro[0][0] !== '')
            return tabuleiro[0][0];
    }
    if (tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0]) {
        if (tabuleiro[0][2] !== '')
            return tabuleiro[0][2];
    }
    // Verifica empate ou jogo em andamento
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (tabuleiro[i][j] === '') {
                return 'Jogo em andamento';
            }
        }
    }
    return 'Empate';
}
// Exemplo de uso
var tabuleiroExemplo = [
    ['X', 'O', 'X'],
    ['X', 'X', 'O'],
    ['O', 'X', 'O']
];
console.log(jogoDaVelha(tabuleiroExemplo)); // Saída: Empate
