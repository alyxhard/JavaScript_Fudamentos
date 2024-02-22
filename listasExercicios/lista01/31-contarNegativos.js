function contarNegativos(vetor) {
    let quantidadeNegativos = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            quantidadeNegativos++;
        }
    }

    console.log(`A quantidade de números negativos no vetor é: ${quantidadeNegativos}`);
}

// Exemplo de uso
const vetorExemplo = [2, -5, 7, -10, 8, -3, -1];
contarNegativos(vetorExemplo);
