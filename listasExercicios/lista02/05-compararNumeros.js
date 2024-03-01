function compararNumeros(primeiroNumero, segundoNumero) {
    if (primeiroNumero >= segundoNumero) {
        return "O primeiro número é maior ou igual ao segundo.";
    } else {
        return "O primeiro número é menor que o segundo.";
    }
}

// Exemplo de uso:
var resultado = compararNumeros(5, 3);
console.log(resultado);  // Saída esperada: "O primeiro número é maior ou igual ao segundo."
