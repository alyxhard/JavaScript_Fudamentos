function ehBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
      return true; // É bissexto
    } else {
      return false; // Não é bissexto
    }
  }
  
  // Exemplos de uso:
  console.log(ehBissexto(2000)); // Saída esperada: true
  console.log(ehBissexto(2020)); // Saída esperada: true
  console.log(ehBissexto(2022)); // Saída esperada: false
  console.log(ehBissexto(2100)); // Saída esperada: false
  