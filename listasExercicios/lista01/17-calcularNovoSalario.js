function calcularNovoSalario(plano, salarioAtual) {
    let percentualAumento;

    switch (plano) {
        case 'A':
            percentualAumento = 0.1;
            break;
        case 'B':
            percentualAumento = 0.15;
            break;
        case 'C':
            percentualAumento = 0.2;
            break;
        default:
            console.log("Plano de trabalho inválido");
            return; // Sai da função se o plano for inválido
    }

    const aumento = salarioAtual * percentualAumento;
    const novoSalario = salarioAtual + aumento;

    console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
}

// Exemplo de uso:
calcularNovoSalario('A', 2000); // Exemplo para o Plano A com salário de R$ 3000
calcularNovoSalario('B', 2000); // Exemplo para o Plano B com salário de R$ 5000
calcularNovoSalario('C', 2000); // Exemplo para o Plano C com salário de R$ 8000
calcularNovoSalario('D', 2000); // Exemplo para um Plano inválido
