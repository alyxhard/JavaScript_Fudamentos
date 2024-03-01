function calcularTotalDespesas(produtos) {
    // Utilize o método reduce para somar os preços dos produtos
    const totalDespesas = produtos.reduce((total, produto) => total + produto.preco, 0);
    return totalDespesas;
  }
  
  // Exemplo de uso:
  const listaDeProdutos = [
    { nome: 'Produto1', categoria: 'Categoria1', preco: 10 },
    { nome: 'Produto2', categoria: 'Categoria2', preco: 20 },
    { nome: 'Produto3', categoria: 'Categoria1', preco: 15 },
  ];
  
  const totalDespesas = calcularTotalDespesas(listaDeProdutos);
  
  console.log(totalDespesas); // Saída esperada: 45 (10 + 20 + 15)
  