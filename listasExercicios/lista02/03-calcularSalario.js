function calcularSalario(horasTrabalhadas, salarioPorHora) {
    var salarioMensal = horasTrabalhadas * salarioPorHora;
    return "Salário igual a R$" + salarioMensal;
}

// Exemplo de uso:
var horasTrabalhadas = 160;  // Supondo 160 horas trabalhadas no mês
var salarioPorHora = 10;    // Supondo R$10 por hora
var resultadoSalario = calcularSalario(horasTrabalhadas, salarioPorHora);
console.log(resultadoSalario);  // Saída esperada: "Salário igual a R$1600"
