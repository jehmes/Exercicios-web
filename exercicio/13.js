function verificarDia(dia) {
    switch (dia) {
        case 1:
        case 7:
            console.log('fim de semana')
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
        console.log('dia válido')
            break
        default : 
        console.log("dia inválido")

            

    }
}

verificarDia(5)
verificarDia(7)