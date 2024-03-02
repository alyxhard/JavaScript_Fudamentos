function filtrarPorQuantidadeDeDigitos(arrayDeNumeros, quantidadeDeDigitos) {
  const numerosFiltrados = arrayDeNumeros.filter(numero => {
    // Converte o número para uma string e verifica o comprimento
    const comprimentoDoNumero = numero.toString().length;
    return comprimentoDoNumero === quantidadeDeDigitos;
  });

  return numerosFiltrados;
}

// Exemplo de uso:
const arrayDeNumeros = [123, 45, 6789, 12, 98765];
const quantidadeDeDigitosDesejada = 5;
const numerosFiltrados = filtrarPorQuantidadeDeDigitos(arrayDeNumeros, quantidadeDeDigitosDesejada);

console.log(`Números com ${quantidadeDeDigitosDesejada} dígitos:`, numerosFiltrados);
