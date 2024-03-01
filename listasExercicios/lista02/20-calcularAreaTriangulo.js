function calcularAreaTriangulo(base, altura) {
  // Calcula a área do triângulo
  const area = (base * altura) / 2;

  // Arredonda a área para duas casas decimais
  const areaArredondada = Math.round(area * 100) / 100;

  return areaArredondada;
}

// Exemplo de uso:
const baseDoTriangulo = 5;
const alturaDoTriangulo = 8;
const areaCalculada = calcularAreaTriangulo(baseDoTriangulo, alturaDoTriangulo);

console.log(areaCalculada); // Saída esperada: 20.00
