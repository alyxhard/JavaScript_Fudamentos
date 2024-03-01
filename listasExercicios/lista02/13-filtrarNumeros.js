function filtrarNumeros(arr) {
    const numerosFiltrados = arr.filter(function(elemento) {
      return !isNaN(elemento) && typeof elemento === 'number';
    });
  
    return numerosFiltrados;
  }
  
  // Exemplo de uso com qualquer array
  const arrayOriginal = [1, 'dois', 3, 'quatro', 5];
  const numerosFiltrados = filtrarNumeros(arrayOriginal);
  console.log(numerosFiltrados); // Saída esperada: [1, 3, 5]
  
  // Exemplo de uso com outro array
  const outroArray = [10, 'onze', 12, 'treze', 14];
  const numerosFiltradosOutroArray = filtrarNumeros(outroArray);
  console.log(numerosFiltradosOutroArray); // Saída esperada: [10, 12, 14]
  