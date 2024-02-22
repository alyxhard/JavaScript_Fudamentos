/* --- Faça um algoritmo que calcule o fatorial de um número. */

function calcularFatorial(numero) {
    if (numero < 0) {
        return "O fatorial não está definido para números negativos.";
    } else if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// Exemplo de uso:
const numeroParaCalcularFatorial = 4;
const resultadoFatorial = calcularFatorial(numeroParaCalcularFatorial);

console.log(`O fatorial de ${numeroParaCalcularFatorial} é: ${resultadoFatorial}`);
