function encontrarMenorNumero(array) {
  if (array.length === 0) {
    // Retorna undefined se o array estiver vazio
    return undefined;
  }

  let menorNumero = array[0]; // Assume que o primeiro número é o menor

  // Itera sobre os números para encontrar o menor
  for (let i = 1; i < array.length; i++) {
    if (array[i] < menorNumero) {
      menorNumero = array[i];
    }
  }

  return menorNumero;
}

// Exemplo de uso:
const numeros = [5, 3, 8, 1, 7];
const menorNumeroEncontrado = encontrarMenorNumero(numeros);

console.log(menorNumeroEncontrado); // Saída esperada: 2
