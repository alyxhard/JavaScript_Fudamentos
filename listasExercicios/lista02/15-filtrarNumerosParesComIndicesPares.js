function filtrarNumerosParesComIndicesPares(numeros) {
    const numerosFiltrados = numeros.filter(function(numero, indice) {
      return numero % 2 === 0 && indice % 2 !== 0;
    });
  
    return numerosFiltrados;
  }
  
  // Exemplo de uso:
  const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numerosFiltrados = filtrarNumerosParesComIndicesPares(arrayOriginal);
  
  console.log(numerosFiltrados);
  // Saída esperada: [2, 4, 6, 8, 10]
  