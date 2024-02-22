function calculadora(valor1, operacao, valor2) {
    switch (operacao) {
        case '+':
            console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
            break;
        case '-':
            console.log(`${valor1} - ${valor2} = ${valor1 - valor2}`);
            break;
        case '*':
            console.log(`${valor1} * ${valor2} = ${valor1 * valor2}`);
            break;
        case '/':
            if (valor2 !== 0) {
                console.log(`${valor1} / ${valor2} = ${valor1 / valor2}`);
            } else {
                console.log("Não é possível dividir por zero");
            }
            break;
        default:
            console.log("Operação inválida");
    }
}

// Exemplo de uso:
calculadora(2, '+', 3);   // Soma: 2 + 3 = 5
calculadora(5, '-', 2);   // Subtração: 5 - 2 = 3
calculadora(4, '*', 6);   // Multiplicação: 4 * 6 = 24
calculadora(10, '/', 2);  // Divisão: 10 / 2 = 5
calculadora(8, '%', 4);   // Operação inválida
