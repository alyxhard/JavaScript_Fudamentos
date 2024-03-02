function encontrarSegundoMaiorNumero(arrayDeNumeros) {
  // Remover duplicatas e ordernar o array em ordem decrescente
  const numerosUnicos = Array.from(new Set(arrayDeNumeros));
  const arrayOrdenado = numerosUnicos.sort((a, b) => b - a);

  // Verificar se há pelo menos dois elementos no array
  if (arrayOrdenado.length < 2) {
    return "Não há segundo maior número.";
  }

  // Retornar o segundo elemento do array ordenado
  return arrayOrdenado[1];
}

// Exemplo de uso:
const arrayDeNumeros = [10, 5, 8, 15, 3, 8, 12];
const segundoMaiorNumero = encontrarSegundoMaiorNumero(arrayDeNumeros);

console.log("Segundo maior número:", segundoMaiorNumero);
