const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'
]

//retorna um arrau so com os preços

const ConverterParaJason = json => JSON.parse(json)
const pegarPreco = produto => produto.preco

const resultado = carrinho.map(ConverterParaJason).map(pegarPreco)
console.log(resultado)