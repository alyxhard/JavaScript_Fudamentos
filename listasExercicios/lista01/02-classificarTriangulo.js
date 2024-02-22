function classificarTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return "Equilátero"; // Todos os lados são iguais
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "Isósceles"; // Dois lados são iguais
    } else {
        return "Escaleno"; // Todos os lados são diferentes
    }
}

// Exemplo de uso:
let resultado = classificarTriangulo(5, 5, 5);
console.log(resultado); // Saída: Equilátero

resultado = classificarTriangulo(4, 5, 4);
console.log(resultado); // Saída: Isósceles

resultado = classificarTriangulo(3, 4, 5);
console.log(resultado); // Saída: Escaleno
