function criarProduto(nome, preco) {

    return {
        nome,
        preco,
        desconto: 0.1
    }

}

console.log(criarProduto('Coca cola', 5))
console.log(criarProduto('Notebook', 2199))