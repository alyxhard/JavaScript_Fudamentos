function calcularMedia(vetor) {
    if (vetor.length === 0) {
        console.log("O vetor está vazio. Não é possível calcular a média.");
        return;
    }

    let soma = 0;

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }

    const media = soma / vetor.length;
    console.log(`A média aritmética é: ${media}`);
}

// Exemplo de uso
const vetorExemplo = [1, 2, 3, 4, 5];
calcularMedia(vetorExemplo);
