function notaPonderada (codigo, nota1, nota2, nota3) {
   let media = 0
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a, b) => a - b)
   media =  ((notas[0]*4 + notas[1]*3 + notas[2] * 3) / 10)
    
    console.log(`o codigo é: ${codigo}. 1º nota ${nota1}. 2º nota ${nota2}. 3º nota ${nota3}. ${media < 5 ? 'reprovado' : 'aprovado'}`)

    
}

console.log(notaPonderada(123, 2.8,  3.5, 6))