function recerberMelhorEstudante(object) {

    const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
    const media = array => soma(array) / array.length

    const estudanteComMedias = Object.entries(object).map((estudante) => {
        const chave = 0,
              valor = 1
        return { nome: estudante[chave], media: media(estudante[valor]) }
    })   

    const estudanteOrdenados = estudanteComMedias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA) //é nessa função q ele pega so a media da função sort e retorna qual a maior pelo parametro estudante.media
    const melhorEstudante = estudanteOrdenados[0]
    console.log(melhorEstudante)
}


recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 }


