function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) {
        return numero >= minimo && numero <= maximo;
    } else {
        return numero > minimo && numero < maximo;
    }
}

// Exemplo de uso:
console.log(estaEntre(10, 50, 100));          // Saída esperada: true (exclusivo)
console.log(estaEntre(16, 100, 160, true));    // Saída esperada: true (inclusivo)
console.log(estaEntre(1, 1, 5, false));   // Saída esperada: false (exclusivo)
console.log(estaEntre(5, 1, 5, true));    // Saída esperada: true (inclusivo)
