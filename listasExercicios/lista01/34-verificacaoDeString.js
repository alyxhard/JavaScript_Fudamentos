function verificacaoDeString(string1, string2) {
    let estaContido = true;

    // Loop para percorrer cada caractere da primeira string
    for (let i = 0; i < string1.length; i++) {
        // Obtém o caractere atual da primeira string e converte para minúsculas
        let caractereString1 = string1.charAt(i).toLowerCase();

        // Loop para percorrer cada caractere da segunda string
        for (let j = 0; j < string2.length; j++) {
            // Obtém o caractere atual da segunda string e converte para minúsculas
            let caractereString2 = string2.charAt(j).toLowerCase();

            // Verifica se os caracteres são iguais
            if (caractereString1 == caractereString2) {
                // Se são iguais, define estaContido como true e sai do loop interno
                estaContido = true;
                break;
            } else {
                // Se não são iguais, define estaContido como false
                estaContido = false;
            }
        }

        // Se estaContido for false, retorna false imediatamente
        if (!estaContido) {
            return estaContido;
        }
    }

    // Loop semelhante para verificar se todos os caracteres da segunda string estão contidos na primeira
    for (let i = 0; i < string2.length; i++) {
        let caractereString2 = string2.charAt(i).toLowerCase();

        for (let j = 0; j < string1.length; j++) {
            let caractereString1 = string1.charAt(j).toLowerCase();

            if (caractereString1 == caractereString2) {
                estaContido = true;
                break;
            } else {
                estaContido = false;
            }
        }

        if (!estaContido) {
            return estaContido;
        }
    }

    // Retorna o resultado final
    return estaContido;
}

// Exemplo de uso
console.log(verificacaoDeString('abcde', 'dcba'));
