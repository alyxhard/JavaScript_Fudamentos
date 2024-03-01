function inverterValor(parametro) {
    if (typeof parametro === 'boolean') {
        return !parametro;  // Inverte o valor booleano
    } else if (typeof parametro === 'number') {
        return -parametro;  // Retorna o oposto do número
    } else {
        return "booleano ou número esperados, mas o parâmetro é do tipo " + typeof parametro + ".";
    }
}

// Exemplo de uso:
console.log(inverterValor(true));   // Saída esperada: false
console.log(inverterValor(5));      // Saída esperada: -5
console.log(inverterValor("texto")); // Saída esperada: "booleano ou número esperados, mas o parâmetro é do tipo string."

// Nesta função chamada inverterValor, utilizamos o operador typeof para verificar se o parâmetro fornecido é um booleano ou um número. Dependendo do tipo, a função inverte o valor booleano ou retorna o oposto do número. Se o parâmetro não for de nenhum desses tipos, a função retorna uma mensagem indicando o tipo do parâmetro.