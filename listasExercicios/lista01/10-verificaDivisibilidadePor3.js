/* --- Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false --- */

function verificaDivisibilidadePor3(numero) {
    return numero % 3 === 0;
}

// Exemplo de uso:
let numeroExemplo = 9;
let resultado = verificaDivisibilidadePor3(numeroExemplo);
console.log(`O número ${numeroExemplo} é divisível por 3? ${resultado}`);
