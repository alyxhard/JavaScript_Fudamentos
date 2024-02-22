// 1. Função principal para realizar o saque
function sacarDinheiro(valorSaque) {
    // 2. Inicializa contadores para cada tipo de nota
    let contador100 = 0;
    let contador50 = 0;
    let contador10 = 0;
    let contador5 = 0;
    let contador1 = 0;

    // 3. Obtém o valor da maior nota possível para o saque
    let valorNota = calcularValorNota(valorSaque);

    // 4. Enquanto o valor do saque for maior ou igual ao valor da nota atual
    while (valorSaque >= valorNota) {
        // 5. Utiliza um switch para determinar o tipo de nota e atualizar os contadores
        switch (valorNota) {
            case 100:
                valorSaque -= 100;
                contador100++;
                break;
            case 50:
                valorSaque -= 50;
                contador50++;
                break;
            case 10:
                valorSaque -= 10;
                contador10++;
                break;
            case 5:
                valorSaque -= 5;
                contador5++;
                break;
            case 1:
                contador1++;
                valorSaque -= 1;
                break;
        }

        // 6. Atualiza o valor da nota para o próximo ciclo do loop
        valorNota = calcularValorNota(valorSaque);
    }

    // 7. Retorna o resultado formatado
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1);
}

// 8. Função para calcular o valor da maior nota possível para o saque
function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100;
    } else if (valorSaque >= 50) {
        return 50;
    } else if (valorSaque >= 10) {
        return 10;
    } else if (valorSaque >= 5) {
        return 5;
    } else if (valorSaque >= 1) {
        return 1;
    }
}

// 9. Função para elaborar o resultado com base nos contadores
function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = '';

    // 10. Adiciona ao resultado apenas as notas que foram utilizadas
    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `;
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `;
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `;
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `;
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `;
    }

    // 11. Retorna o resultado final
    return resultado;
}

// 12. Exemplo de utilização da função com um saque de R$ 153
console.log(sacarDinheiro(153));
