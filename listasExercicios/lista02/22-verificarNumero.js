function verificarNumero(suaEscolha) {
  // Gerar um número aleatório de 1 a 10
  const numeroSorteado = Math.floor(Math.random() * 10) + 1;

  // Verificar se o número fornecido é igual ao número sorteado
  if (suaEscolha >= 1 && suaEscolha <= 10) {
    if (suaEscolha === numeroSorteado) {
      return `Parabéns! O número sorteado foi o ${numeroSorteado}`;
    } else {
      return `Que pena! O número sorteado foi o ${numeroSorteado}`;
    }
  } else {
    return "Por favor, escolha um número de 1 a 10.";
  }
}

// Exemplo de uso:
const numeroEscolhido = 10; // Substitua pelo número que você deseja verificar
const resultado = verificarNumero(numeroEscolhido);
console.log(resultado);
