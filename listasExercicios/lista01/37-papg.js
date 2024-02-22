// Função para calcular os termos e a soma de uma progressão aritmética
function progressaoAritmetica(n, a1, r) {
    let termos = [];
    let soma = 0;

    for (let i = 0; i < n; i++) {
        let termo = a1 + i * r;
        termos.push(termo);
        soma += termo;
    }

    console.log("Termos da progressão aritmética:", termos);
    console.log("Soma dos termos da progressão aritmética:", soma);

    return {
        termos: termos,
        soma: soma
    };
}

// Função para calcular os termos e a soma de uma progressão geométrica
function progressaoGeometrica(n, a1, r) {
    let termos = [];
    let soma = 0;

    for (let i = 0; i < n; i++) {
        let termo = a1 * Math.pow(r, i);
        termos.push(termo);
        soma += termo;
    }

    console.log("Termos da progressão geométrica:", termos);
    console.log("Soma dos termos da progressão geométrica:", soma);

    return {
        termos: termos,
        soma: soma
    };
}

// Exemplo de uso para progressão aritmética
const resultadoPA = progressaoAritmetica(10, 10, 15);

console.log('-----------------------------');

// Exemplo de uso para progressão geométrica
const resultadoPG = progressaoGeometrica(10, 10, 15);