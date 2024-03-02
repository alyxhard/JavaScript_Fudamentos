function inverterChavesValores(objeto) {
  const objetoInvertido = {};

  for (const chave in objeto) {
    if (objeto.hasOwnProperty(chave)) {
      objetoInvertido[objeto[chave]] = chave;
    }
  }

  return objetoInvertido;
}

// Exemplo de uso:
const meuObjeto = {
  chave1: "valor1",
  chave2: "valor2",
  chave3: "valor3",
};

const objetoInvertido = inverterChavesValores(meuObjeto);

console.log("Objeto Original:", meuObjeto);
console.log("-----------------------------"); 
console.log("Objeto Invertido:", objetoInvertido);
