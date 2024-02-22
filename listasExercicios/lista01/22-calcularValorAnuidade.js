function calcularValorAnuidade(mes, valorAnuidade) {
    // Verifica se o mês é válido (deve ser de 1 a 12)
    if (mes < 1 || mes > 12) {
        return 'Mês inválido. Insira um valor de 1 a 12.';
    }

    // Calcula o número de meses desde janeiro
    let mesesPassados = mes - 1;

    // Calcula o valor com juros compostos
    let valorComJuros = valorAnuidade * Math.pow(1.05, mesesPassados);

    // Retorna o valor formatado
    return `O valor a ser pago no mês ${mes} é R$ ${valorComJuros.toFixed(2)}.`;
}

// Exemplo de uso
console.log(calcularValorAnuidade(4, 100)); // Exemplo para o terceiro mês, com uma anuidade de R$ 100
