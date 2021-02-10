function buscarPalavrasSemelhantes(inicio, palavras) { //VE SE TEM PALAVRA PARECIDA NUM ARRAY DE STRING
    const resultado = []
    for (let palavra of palavras) {
        if (palavra.includes(inicio)) {
            resultado.push(palavra)
        }
    
    }
    console.log(resultado)
}



buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []
console.log(["javascript", "java", "c++"].toString()) //transforma em string
