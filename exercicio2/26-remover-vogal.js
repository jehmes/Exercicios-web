function removerVogais(frase) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach(vogal => frase = frase.replace(vogal, ''))
    console.log(frase)
}


function removerVogais(frase) {
    return frase.replace(/[aeiou]/ig, '')
    }
    


removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"
