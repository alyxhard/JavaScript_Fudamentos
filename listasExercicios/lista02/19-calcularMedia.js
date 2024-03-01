function calcularMedia(numbers) {
    // Verifica se o array está vazio
    if (numbers.length === 0) {
      return 0; // Retorna 0 se o array estiver vazio para evitar divisão por zero
    }
  
    // Utiliza o método reduce para somar todos os números
    const soma = numbers.reduce((acumulador, numero) => acumulador + numero, 0);
  
    // Calcula a média dividindo a soma pelo total de elementos
    const media = soma / numbers.length;
  
    return media;
  }
  
  // Exemplo de uso:
  const conjuntoDeNumeros = [10, 20, 30, 40, 50];
  const mediaCalculada = calcularMedia(conjuntoDeNumeros);
  
  console.log(mediaCalculada); // Saída esperada: 30 (média de 10, 20, 30, 40, 50)
  