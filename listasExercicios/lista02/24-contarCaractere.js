function contarCaractere(char, str) {
  // Inicializar a contagem
  let contagem = 0;

  // Iterar pela string
  for (let i = 0; i < str.length; i++) {
    // Verificar se o caractere na posição atual é igual ao caractere fornecido
    if (str.charAt(i) === char) {
      contagem++;
    }
  }

  // Retornar a contagem final
  return contagem;
}

// Exemplo de uso:
const caractereProcurado = 'A'; // Substitua pelo caractere que você deseja contar
const minhaString = 'Abracadabra'; // Substitua pela sua string de entrada
const resultado = contarCaractere(caractereProcurado, minhaString);

console.log(`O caractere "${caractereProcurado}" aparece ${resultado} vezes na string. "${minhaString}"`);
