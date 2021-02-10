class Lancamento {
    constructor(nome = 'generico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }

    addLancamentos(...lancamentos) { // Esse ...lancamentos qr dizer q a função vai receber varios parametros
        lancamentos.forEach(l => this.lancamento.push(l))
        
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamento.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
   
}

const salario = new Lancamento('salario', 45000)
const contaDeLuz = new Lancamento('luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())
