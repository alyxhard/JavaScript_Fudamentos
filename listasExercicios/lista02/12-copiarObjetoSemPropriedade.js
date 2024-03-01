function copiarObjetoSemPropriedade(objetoOriginal, propriedadeExcluir) {
    // Garante que o primeiro argumento seja um objeto
    if (typeof objetoOriginal !== 'object' || objetoOriginal === null) {
        throw new Error("O primeiro parâmetro deve ser um objeto.");
    }

    // Cria uma cópia do objeto original usando o spread operator
    const objetoCopia = { ...objetoOriginal };

    // Remove a propriedade especificada
    delete objetoCopia[propriedadeExcluir];

    return objetoCopia;
}

// Exemplo de uso:
const meuObjeto = { nome: "John", idade: 30, cidade: "New York" };
const objetoCopiaSemCidade = copiarObjetoSemPropriedade(meuObjeto, "cidade");

console.log(meuObjeto);                 // Objeto original não foi alterado

console.log("-----------------------------"); 

console.log(objetoCopiaSemCidade);      // Objeto copiado sem a propriedade "cidade"
