function objetoParaArrayDeArrays(objeto) {
  // Obtém as chaves do objeto
  const chaves = Object.keys(objeto);

  // Cria um array de arrays contendo pares chave/valor
  const arrayDeArrays = chaves.map(function(chave) {
    return [chave, objeto[chave]];
  });

  return arrayDeArrays;
}

// Exemplo de uso:
const meuObjeto = { nome: 'João', idade: 25, cidade: 'Exemploville' };
const arrayDeArrays = objetoParaArrayDeArrays(meuObjeto);

console.log(arrayDeArrays);
// Saída esperada: [['nome', 'João'], ['idade', 25], ['cidade', 'Exemploville']]
