function segundoMaior(array) {
    function corrigirNumero (a, b) { //isso é q retornar se n tiver essa função -> [ 1, 12, 16, 5 ] pq ele acha q 12 por ter 2 numeros, o 1 vem primeiro, entao 1 / 1 2 / ...
        return b - a
    }
    let novoArray = []    
    novoArray = array.sort(corrigirNumero)
    console.log(novoArray[1])

   
}


segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6