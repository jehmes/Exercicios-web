function funcaoDaSorte(n) {
    let max = 10
    let min = 1
    let random = 0
    random = (Math.random() * (max - min) + min).toFixed()  //Math.floor(Math.random() * (max - min + 1) + min) <- o floor arredonda pra baixo
    
    if (n == random) {
        console.log(`Parabéns! O número sorteado foi o ${random}`)
    }
    else console.log(`Que pena! O número sorteado foi o ${random}`)
}






funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3"
funcaoDaSorte(3) // retornará "Que pena! O número sorteado foi o 1"
