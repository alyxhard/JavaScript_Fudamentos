function removerVogais(str) {
  // Utilizar expressão regular para substituir todas as vogais por uma string vazia
  const strSemVogais = str.replace(/[aeiouAEIOU]/g, '');

  return strSemVogais;
}

// Exemplo de uso:
const minhaString = "Olá, isso é um exemplo!";
const resultado = removerVogais(minhaString);

console.log("String sem vogais:", resultado);
