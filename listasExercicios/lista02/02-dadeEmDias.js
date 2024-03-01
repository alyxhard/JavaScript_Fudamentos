function idadeEmDias(idadeEmAnos) {
    // Assumindo que um ano tem 365 dias
    var diasPorAno = 365;
    var idadeEmDias = idadeEmAnos * diasPorAno;
    return idadeEmDias;
}

// Exemplo de uso:
var idade = 25;
var idadeEmDiasResultado = idadeEmDias(idade);
console.log(idadeEmDiasResultado); // Saída esperada: 9125
