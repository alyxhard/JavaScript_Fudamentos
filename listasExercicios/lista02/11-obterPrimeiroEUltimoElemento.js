function obterPrimeiroEUltimoElemento(arr) {
    // Verifica se o array tem pelo menos dois elementos
    if (arr.length < 2) {
        return "Por favor, forneça um array com pelo menos dois elementos.";
    }

    // Cria um novo array contendo o primeiro e o último elemento
    const novoArray = [arr[0], arr[arr.length - 1]];
    
    return novoArray;
}

// Exemplo de uso:
const arrayExemplo = ['A', 'B', 'C', 'D', 'E'];
const resultado = obterPrimeiroEUltimoElemento(arrayExemplo);
console.log(resultado);  // Saída esperada: [1, 5]



// Nesta função chamada obterPrimeiroEUltimoElemento, verificamos se o array fornecido tem pelo menos dois elementos. Se sim, criamos um novo array contendo o primeiro e o último elemento do array original.