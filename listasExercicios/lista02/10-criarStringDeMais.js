function criarStringDeMais(quantidade) {
    // Verifica se a quantidade é um número inteiro não negativo
    if (!Number.isInteger(quantidade) || quantidade < 0) {
        return "Por favor, forneça um número inteiro não negativo para a quantidade.";
    }

    // Inicializa uma string vazia
    let resultado = "";

    // Adiciona o símbolo "+" à string a quantidade de vezes especificada
    for (let i = 0; i < quantidade; i++) {
        resultado += "+";
    }

    return resultado;
}

// Exemplo de uso:
const resultadoStringDeMais = criarStringDeMais(5);
console.log(resultadoStringDeMais);  // Saída esperada: "+++++"
