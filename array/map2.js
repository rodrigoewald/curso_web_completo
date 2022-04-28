const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// minha solução
let resultado = carrinho.map(function(e) {
    return JSON.parse(e).preco
})

console.log(resultado)

// solução aula
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado1 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado1)