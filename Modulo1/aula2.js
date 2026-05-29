// Criando o objeto produto
let produto = {
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos",
    quantidadeEstoque: 12
};

// Percorrendo o objeto com for...in
console.log("Propriedades do produto:");

for (let propriedade in produto) {
    console.log(propriedade + ": " + produto[propriedade]);
}

// Adicionando nova propriedade desconto
produto.desconto = 10; // desconto em porcentagem

// Calculando o preço final
let precoFinal = produto.preco - (produto.preco * produto.desconto / 100);

console.log("\nDesconto: " + produto.desconto + "%");
console.log("Preço final: R$ " + precoFinal.toFixed(2));