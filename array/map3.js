Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "caderno", "preco": 13.90}',
    '{"nome": "kit de lapis", "preco": 41.22}',
    '{"nome": "caneta", "preco": 7.50}'
]

//retorna um arrau so com os preços

const ConverterParaJason = json => JSON.parse(json)
const pegarPreco = produto => produto.preco

const resultado = carrinho.map2(ConverterParaJason).map2(pegarPreco)
console.log(resultado)