const GulpClient = require('gulp')
const gulp = require('gulp')
const {series, parallel} = require('gulp')

function antes1(callback) {
    console.log('Tarefa de copiar 1')
    return callback()
}
function antes2(callback) {
    console.log('Tarefa de copiar 2')
    return callback()
}
function copiar(callback) {
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])//aki diz que os 2 arquivos do caminho escrito irão ser copiados
    gulp.src('pastaA/**/*.txt') //Esse e o metodo de cima faz a msm coisa
    // .pipe(imagePelaMetade()) //o imagePelametade é so exemplo)
    // .pipe(processo2()) //é tipo o then. pode rciar varias sequencias de transformaçoes
    // .pipe(processo3())
    .pipe(gulp.dest('pastaB')) //ele cria a pastaB
    return callback()
}
function fim(callback) {
    console.log('Tarefa de copiar 4')
    return callback()
}

module.exports.default = series(
    parallel(antes1, antes2), //exeucação ao msm tempo (em paralelo)
    copiar, //execucação em sequencia
    fim //execucação em sequencia
    )