function contarPalavras(frase) {
  // Remover espaços em branco no início e no final da string
  const fraseSemEspacos = frase.trim();

  // Verificar se a string não está vazia
  if (fraseSemEspacos.length === 0) {
    return 0; // Retorna 0 se a string estiver vazia
  }

  // Dividir a string em palavras usando o espaço como delimitador
  const palavras = fraseSemEspacos.split(/\s+/);

  // Retornar o número de palavras
  return palavras.length;
}

// Exemplo de uso:
const minhaFrase = "Esta é uma frase de exemplo.";
const numeroDePalavras = contarPalavras(minhaFrase);
console.log(`A frase tem ${numeroDePalavras} palavra(s).`);
