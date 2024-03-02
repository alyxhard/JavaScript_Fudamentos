function filtrarPalavrasSemelhantes(palavra, arrayDeStrings) {
  // Utilizar o método filter para criar um novo array com as palavras semelhantes
  const palavrasSemelhantes = arrayDeStrings.filter(str => str === palavra);

  return palavrasSemelhantes;
}

// Exemplo de uso:
const palavraChave = "casa";
const arrayDeStrings = ["casa", "carro", "maçã", "casamento", "bicicleta"];
const palavrasFiltradas = filtrarPalavrasSemelhantes(palavraChave, arrayDeStrings);

console.log("Palavras semelhantes:", palavrasFiltradas);
