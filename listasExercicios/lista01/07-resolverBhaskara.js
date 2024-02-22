function resolverBhaskara(ax2, bx, c) {
    // Calcula o delta
    let delta = Math.pow(bx, 2) - 4 * ax2 * c;

    // Verifica se o delta é negativo
    if (delta < 0) {
        return "Delta é negativo";
    }

    // Calcula as raízes
    let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
    let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);

    // Retorna um vetor com os resultados
    return [x1, x2];
}

// Exemplo de uso:
let resultados = resolverBhaskara(3, -5, 12);
console.log("Resultados de Bhaskara:", resultados);

console.log("Resultados de Bhaskara:", resolverBhaskara(1, 3, 2));
