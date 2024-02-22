function calcularValorPlano(idade) {
    // Valor base do plano
    let valorBase = 100;

    // Adicional conforme a idade
    let adicional = 0;

    // Verifica a faixa etária e adiciona o adicional correspondente
    if (idade < 10) {
        adicional = 80;
    } else if (idade >= 10 && idade <= 30) {
        adicional = 50;
    } else if (idade > 30 && idade <= 60) {
        adicional = 95;
    } else {
        adicional = 130;
    }

    // Calcula o valor total
    let valorTotal = valorBase + adicional;

    // Retorna o resultado formatado
    return `O conveniado de ${idade} anos pagará R$ ${valorTotal}.`;
}

// Exemplos de uso
console.log(calcularValorPlano(8));   // Exemplo para uma criança com menos de 10 anos
console.log(calcularValorPlano(25));  // Exemplo para um conveniado entre 10 e 30 anos
console.log(calcularValorPlano(45));  // Exemplo para um conveniado entre 30 e 60 anos
console.log(calcularValorPlano(70));  // Exemplo para um conveniado acima de 60 anos
