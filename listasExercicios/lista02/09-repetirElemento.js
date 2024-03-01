function repetirElemento(elemento, numeroDeRepeticoes) {
    // Verifica se o número de repetições é um número inteiro não negativo
    if (!Number.isInteger(numeroDeRepeticoes) || numeroDeRepeticoes < 0) {
        return "Por favor, forneça um número inteiro não negativo para o número de repetições.";
    }

    // Cria um array com o elemento repetido o número de vezes especificado
    const resultado = Array(numeroDeRepeticoes).fill(elemento);
    
    return resultado;
}

// Exemplo de uso:
const arrayRepetido = repetirElemento('alyx', 10);
console.log(arrayRepetido);  // Saída esperada: ["A", "A", "A", "A", "A"]
