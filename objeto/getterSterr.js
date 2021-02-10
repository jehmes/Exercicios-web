const sequencia = {
    _valor: 1,//convenção para diazer q é private
    get valor() { return this._valor++ }, //o get e set sao palavras reservadas
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //ele n deixa alterar o valor por causa do if la de cima
console.log(sequencia.valor, sequencia.valor)