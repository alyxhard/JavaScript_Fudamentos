function comprarCarro(modelo) {
    switch (modelo.toLowerCase()) {
        case "hatch":
            console.log("Compra efetuada com sucesso");
            break;
        case "sedan":
        case "motocicleta":
        case "caminhonete":
            console.log("Tem certeza que não prefere este modelo?");
            break;
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui");
    }
}

// Exemplo de uso:
comprarCarro("hatch");
comprarCarro("sedan");
comprarCarro("moto");
comprarCarro("caminhonete");
comprarCarro("carrinho"); // Exemplo de modelo não reconhecido
