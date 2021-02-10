const produtos = [
    { nome: 'notebook', preco: 2499, fragil: true },
    { nome: 'ipad', preco: 4199, fragil: true },
    { nome: 'copo video', preco: 12.49, fragil: true },
    { nome: 'copo palsstico', preco: 18.99, fragil: true }
]

console.log(produtos.filter(function(p, i) {
    console.log(p, i)
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))

