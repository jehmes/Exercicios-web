function contarCaractere(char, string) {
    let contador = 0
    for (let i = 0; i < string.length; i++ ) {
        if (string.charAt(i) == char) {
            contador++
        }
    }
    console.log(contador)
}


function contarCaractere(caractereBuscado, frase) {
    return [...frase].filter(caractere => caractere === caractereBuscado).length
    }


contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1
