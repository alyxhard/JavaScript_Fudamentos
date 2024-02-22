// Crie os vetores
var vetorPilha = [1, 2, 3, 4, 5];
var vetorAdiciona = [6, 7, 8, 9, 10];

// Adicione os valores do vetorAdiciona ao vetorPilha usando o método push
for (var i = 0; i < vetorAdiciona.length; i++) {
    vetorPilha.push(vetorAdiciona[i]);
}

// Mostre os valores no console
console.log("Vetor Pilha após adição:", vetorPilha);
console.log("Vetor Adiciona:", vetorAdiciona);