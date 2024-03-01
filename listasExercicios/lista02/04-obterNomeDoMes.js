function obterNomeDoMes(numeroDoMes) {
    var meses = [
        "janeiro", "fevereiro", "março", "abril",
        "maio", "junho", "julho", "agosto",
        "setembro", "outubro", "novembro", "dezembro"
    ];

    if (numeroDoMes >= 1 && numeroDoMes <= 12) {
        var nomeDoMes = meses[numeroDoMes - 1];
        return nomeDoMes;
    } else {
        return "Número de mês inválido. Deve estar entre 1 e 12.";
    }
}

// Exemplo de uso:
var numeroDoMes = 2;
var nomeDoMes = obterNomeDoMes(numeroDoMes);
console.log(nomeDoMes); // Saída esperada: "fevereiro"
