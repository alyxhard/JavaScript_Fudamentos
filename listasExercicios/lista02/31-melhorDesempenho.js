function melhorDesempenho(notasDosEstudantes) {
  let melhorAluno = null;
  let melhorMedia = -1;

  for (const aluno in notasDosEstudantes) {
    if (notasDosEstudantes.hasOwnProperty(aluno)) {
      const notas = notasDosEstudantes[aluno];

      // Calcular a média das notas do aluno
      const media = notas.reduce((total, nota) => total + nota, 0) / notas.length;

      // Verificar se a média é maior que a melhor média atual
      if (media > melhorMedia) {
        melhorMedia = media;
        melhorAluno = aluno;
      }
    }
  }

  // Retornar um objeto com os atributos nome e media do melhor aluno
  return { nome: melhorAluno, media: melhorMedia };
}

// Exemplo de uso:
const notasDosEstudantes = {
  Joao: [8, 7, 9],
  Maria: [9, 8, 10],
  Carlos: [7, 6, 8],
};

const melhorAluno = melhorDesempenho(notasDosEstudantes);

console.log("Melhor aluno:", melhorAluno);
