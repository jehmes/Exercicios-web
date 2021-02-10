const { series } = require('gulp') //esse series, é a forma como vai ser exuctado(em serie)
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json') 

function transformacaoTS() {
    return tsProject.src()//n precisa passar o caminho das pastas e arquivos pq o proprio tsProject tem a informação, pq ele importou o tsconfig.json e dentro do arquivo json tinha o arrquivo q ele iria transformar para javascrip
    .pipe(tsProject()) //aki acontece a transformação
    .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)