function jurosSimples(capitalInicial, taxaJuros, tempo) {
    // Fórmula para juros simples: M = P * (1 + rt)
    let montante = capitalInicial * (1 + (taxaJuros / 100) * tempo);
    return montante;
}

// Exemplo de uso:
let montanteJurosSimples = jurosSimples(1000, 5, 2);
console.log("Montante (Juros Simples):", montanteJurosSimples);

function jurosCompostos(capitalInicial, taxaJuros, tempo) {
    // Fórmula para juros compostos: M = P * (1 + r)^t
    let montante = capitalInicial * Math.pow((1 + taxaJuros / 100), tempo);
    return montante;
}

// Exemplo de uso:
let montanteJurosCompostos = jurosCompostos(1000, 5, 2);
console.log("Montante (Juros Compostos):", montanteJurosCompostos);
