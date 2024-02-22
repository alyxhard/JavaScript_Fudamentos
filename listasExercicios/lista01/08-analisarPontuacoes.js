function analisarPontuacoes(pontuacoes) {
    // Converte a string de pontuações para um array de números
    const pontuacoesArray = pontuacoes.split(' ').map(Number);

    // Inicializa variáveis para acompanhar o recorde e o pior jogo
    let recorde = pontuacoesArray[0];
    let piorJogo = 0;
    let vezesRecordeBatido = 0;

    // Itera sobre as pontuações a partir do segundo jogo
    for (let i = 1; i < pontuacoesArray.length; i++) {
        if (pontuacoesArray[i] > recorde) {
            recorde = pontuacoesArray[i];
            vezesRecordeBatido++;
        } else if (pontuacoesArray[i] < pontuacoesArray[piorJogo]) {
            piorJogo = i;
        }
    }

    // Retorna o resultado como um array
    return [vezesRecordeBatido, piorJogo + 1];
}

// Exemplo de uso:
let pontuacoesString = "10 20 20 8 25 3 0 30 1";
let resultado = analisarPontuacoes(pontuacoesString);
console.log("Resultado:", resultado);
