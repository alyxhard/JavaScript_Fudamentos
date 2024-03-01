function multiplicacaoSemOperador(num1, num2) {
    // Verifica se os números são não negativos
    if (num1 < 0 || num2 < 0) {
        return "Por favor, forneça números não negativos.";
    }

    let resultado = 0;

    // Adiciona num1 a resultado num2 vezes
    for (let i = 0; i < num2; i++) {
        resultado += num1;
    }

    return resultado;
}

// Exemplo de uso:
let resultadoMultiplicacao = multiplicacaoSemOperador(5, 3);
console.log(resultadoMultiplicacao);  // Saída esperada: 15
