function classificarAluno(nota) {
    // Verifica se a nota está abaixo de 38
    if (nota < 38) {
        return "Reprovado";
    }

    // Calcula o próximo múltiplo de 5
    let proximoMultiploDe5 = Math.ceil(nota / 5) * 5;

    // Verifica se o arredondamento é necessário e possível
    if (proximoMultiploDe5 - nota < 3) {
        return "Aprovado " + proximoMultiploDe5;
    } else {
        return "Aprovado " + nota;
    }
}

// Exemplo de uso:
let notaAluno1 = 84;
let resultado1 = classificarAluno(notaAluno1);
console.log("Resultado para nota", notaAluno1 + ":", resultado1);

let notaAluno2 = 29;
let resultado2 = classificarAluno(notaAluno2);
console.log("Resultado para nota", notaAluno2 + ":", resultado2);

let notaAluno3 = 38;
let resultado3 = classificarAluno(notaAluno3);
console.log("Resultado para nota", notaAluno3 + ":", resultado3);
