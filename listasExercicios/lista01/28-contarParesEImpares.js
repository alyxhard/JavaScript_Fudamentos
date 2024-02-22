function contarParesEImpares(vetor) {
    let pares = 0;
    let impares = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 === 0) {
            // O número é par
            pares++;
        } else {
            // O número é ímpar
            impares++;
        }
    }

    console.log(`Quantidade de números pares: ${pares}`);
    console.log(`Quantidade de números ímpares: ${impares}`);
}

// Exemplo de uso:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
contarParesEImpares(numeros);
