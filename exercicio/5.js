function formatar (n) {
    valorEmReais = n.toFixed(2).toString().replace('.', ',')
    console.log(valorEmReais)
}

formatar(5.555555554)

