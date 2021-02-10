const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao //se a tagName poe exemplo, body existir nesse objeto de cores, ele vai setar pra aquela cor, se n tiver, ele vai colocar padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase() //aki pega o nome da tag, nesse caso são,: body, div, 3 span...
    console.log(tagName)
    
    elemento.style.borderColor = colors.get(tagName)

    if(!elemento.classList.contains('nolabel')) { //se o nome da classe não conter nolabel ele aplica o label pra aplicar em cada caixa
        const label = document.createElement('label') 
        label.style.backgroundColor = colors.get(tagName) //esse tag label foi criado no tag.css. Por padrao ela tem o background branco, e aqui ele seta a cor do background
        label.innerHTML = tagName //aki ta adiicionando o nome da tag  em cada label
        elemento.insertBefore(label, elemento.childNodes[0]) //aki a inserindo o label em cada elemento. essa posição [0] é pra adicionar antes de qlqr coisa
    }


})