function calcularDivisaoEResto(dividendo, divisor) {
    if (divisor === 0) {
        console.error("Erro: O divisor não pode ser zero.");
        return;
    }

    var resultado = Math.floor(dividendo / divisor);
    var resto = dividendo % divisor;

    console.log("Resultado da divisão:", resultado);
    console.log("Resto da divisão:", resto);
}

// Exemplo de uso:
calcularDivisaoEResto(11, 4);
