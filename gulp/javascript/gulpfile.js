const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')


function transformacaoJS(cb) {
    //qm ta fazendo o callback é o gulp internamente
    //esse return é uma callback, escrito de outra forma
    return gulp.src('src/**/*.js')//tudo q tiver nessa pasta
    .pipe(babel({
        comments: false,//tira as linhas de comentarios
        presets: ["env"] //faz com q o codigo seja o mais suporavel possivel( troca let por var) pra q seja suportado por outros browser
    }))
    .pipe(uglify())//tira todos esopaços em brancos
    .on('erro', err => console.log(err))//trat de erro no meio do processo
    .pipe(concat('codigo.min.js'))//junta tudo e cria o arquivo com esse nome
    .pipe(gulp.dest('build'))
     
}

function fim(cb) {
    console.log('fim') //esse return é amsm coisa do de cima, escrito de outra forma
    return cb()
}

exports.default = series(transformacaoJS, fim)
//digitar "gulp" no console dentro da pasta atual(javascript.js) nesse caso