//A sequencia de chamadas no webpack ta assim: 1-principal.js 2-pessoa.js 3-moduloA  4-moduloB
//tanto faz usar o module.exports ou export default, qlqr um dos exports e imports do node ou ecma pode ser usado juntos, mas é boa pratica


import Pessoa from './pessoa'
import './assets'  //esse comentario na direta sao exemplos                             //import './assets/css/estilo.css'    //o 1° comentario tbm funciona se vc colocar em sequencia os imports. Mas dessse jeito que esta escrito neessa linha de comnentario tbm funciona
 //aqui foi criado um index.js com os arquivos css e scss                                                                                        //pq no arquivo webpack está esse arquivo como principal, então ele consegue mapear todos os imports que estiverem nele

const atendente = new Pessoa
console.log(atendente.cumprimentar())