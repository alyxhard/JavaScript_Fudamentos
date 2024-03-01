function somarNumeros(array) {
    // Utilize o método reduce para somar todos os números no array
    const soma = array.reduce((acumulador, numero) => acumulador + numero, 0);
    return soma;
  }
  
  // Exemplo de uso:
  const numeros = [1, 2, 3, 4, 5];
  const resultado = somarNumeros(numeros);
  
  console.log(resultado); // Saída esperada: 15 (1 + 2 + 3 + 4 + 5)

  //Neste exemplo, a função somarNumeros utiliza o método reduce para iterar sobre o array e acumular a soma dos números. O segundo argumento para reduce é o valor inicial do acumulador, que é definido como 0. O resultado final é a soma de todos os números no array.





