function realizarOperacoes(valor1, valor2) {
    // Soma
    const soma = valor1 + valor2;
    console.log(`Soma: ${soma}`);
  
    // Subtração
    const subtracao = valor1 - valor2;
    console.log(`Subtração: ${subtracao}`);
  
    // Multiplicação
    const multiplicacao = valor1 * valor2;
    console.log(`Multiplicação: ${multiplicacao}`);
  
    // Divisão
    if (valor2 !== 0) {
      const divisao = valor1 / valor2;
      console.log(`Divisão: ${divisao}`);
    } else {
      console.log("Não é possível dividir por zero.");
    }
  }
  
  // Exemplo de uso
  const valorA = 10;
  const valorB = 0;
  realizarOperacoes(valorA, valorB);
  