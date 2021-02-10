const { parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const ugligycss = require('gulp-uglifycss') //especificar q é para css. Ele tira todos os espaços em branco
const concat = require('gulp-concat') //ele junta todas as linhas em 1 só

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')//aki ele ta dando o caminho onde o arquivos estao, sao varios arquivos, mas o index.scss ja contem dentroo dele todos os links pra esses arquivos
    .pipe(sass().on('erro', sass.logError))//o sass.on() ja ta transformando em css / .on é opicional pra tratar um erro
    .pipe(concat('estilo.min.css'))
    .pipe(ugligycss({"uglyComments": true}))
    .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
    return gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCSS, copiarHTML)