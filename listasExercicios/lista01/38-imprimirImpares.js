function imprimirImpares(inicio = 0, fim = 100) {
    // Corrige a ordem dos parâmetros caso o valor de início seja maior que o valor de fim
    if (inicio > fim) {
      [inicio, fim] = [fim, inicio];
    }
  
    // Garante que o início e o fim são ímpares
    inicio = Math.ceil(inicio);
    fim = Math.ceil(fim);
  
    // Itera pelos números ímpares no intervalo [inicio, fim]
    for (let i = inicio % 2 === 0 ? inicio + 1 : inicio; i <= fim; i += 2) {
      console.log(i);
    }
  }
  
  // Exemplo de uso
  imprimirImpares(10, 25); // Imprime os ímpares entre 10 e 25
  console.log("--------")
  imprimirImpares(50, 30); // Imprime os ímpares entre 30 e 50 (ordem invertida)
  